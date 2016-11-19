import time
import os
from constants import constants
import subprocess
from constants import blockNames
import shutil
import simulationTypes
import string
import sys


class SimulationParameters:
    def __init__(self):
        self.processors = 0
        self.executable = ""
        self.templetizedControlFile = ""
        self.dataFolder = ""
        self.documentsFolder = ""
        self.iterations = 0
        self.peleSteps = 0
        self.seed = 0
        self.exitCondition = None


class SimulationRunner:
    def __init__(self, parameters):
        self.parameters = parameters

    def runSimulation(self, runningControlFile=""):
        pass

    def hasExitCondition(self):
        return self.parameters.exitCondition

    def checkExitCondition(self, clustering):
        if self.parameters.exitCondition:
            return self.parameters.exitCondition.checkExitCondition(clustering)
        return False

    def makeWorkingControlFile(self, workingControlFilename, dictionary):
        inputFile = open(self.parameters.templetizedControlFile, "r")
        inputFileContent = inputFile.read()
        inputFile.close()

        inputFileTemplate = string.Template(inputFileContent)
        outputFileContent = inputFileTemplate.substitute(dictionary)

        outputFile = open(workingControlFilename, "w")
        outputFileContent = outputFileContent.replace("'", '"')
        outputFile.write(outputFileContent)
        outputFile.close()


class PeleSimulation(SimulationRunner):
    def __init__(self, parameters):
        SimulationRunner.__init__(self, parameters)
        self.type = simulationTypes.SIMULATION_TYPE.PELE

    def createSymbolicLinks(self):
        if not os.path.islink("Data"):
            os.system("ln -s " + self.parameters.dataFolder + " Data")
        if not os.path.islink("Documents"):
            os.system("ln -s " + self.parameters.documentsFolder + " Documents")

    def runSimulation(self, runningControlFile=""):
        self.createSymbolicLinks()

        toRun = ["mpirun -np " + str(self.parameters.processors), self.parameters.executable, runningControlFile]
        toRun = " ".join(toRun)
        print toRun
        startTime = time.time()
        proc = subprocess.Popen(toRun, stdout=subprocess.PIPE, shell=True)
        (out, err) = proc.communicate()
        print out
        if err:
            print err

        endTime = time.time()
        print "PELE took %.2f sec" % (endTime - startTime)


class TestSimulation(SimulationRunner):
    """
        Class used for testing
    """
    def __init__(self, parameters):
        self.type = simulationTypes.SIMULATION_TYPE.TEST
        self.copied = False
        self.parameters = parameters

    def runSimulation(self, runningControlFile=""):
        if not self.copied:
            if os.path.exists(self.parameters.destination):
                shutil.rmtree(self.parameters.destination)
            shutil.copytree(self.parameters.origin, self.parameters.destination)
            self.copied = True

    def makeWorkingControlFile(self, workingControlFilename, dictionary):
        pass


class ExitConditionBuilder:
    def build(self, exitConditionBlock):
        exitConditionType = exitConditionBlock[blockNames.ExitConditionType.type]
        exitConditionParams = exitConditionBlock[blockNames.SimulationParams.params]
        if exitConditionType == blockNames.ExitConditionType.metric:
            metricCol = exitConditionParams[blockNames.SimulationParams.metricCol]
            metricValue = exitConditionParams[blockNames.SimulationParams.exitValue]
            return MetricExitCondition(metricCol, metricValue,
                                       exitConditionType)
        else:
            sys.exit("Unknown exit condition type! Choices are: " + str(simulationTypes.EXITCONDITION_TYPE_TO_STRING_DICTIONARY.values()))


class MetricExitCondition:
    def __init__(self, metricCol, metricValue, type):
        self.metricCol = metricCol
        self.metricValue = metricValue
        self.lastCheckedCluster = 0
        self.type = simulationTypes.EXITCONDITION_TYPE.METRIC

    def checkExitCondition(self, clustering):
        """ Iterate over all unchecked cluster and check if the exit condtion
            is met
        """
        for i in range(self.lastCheckedCluster, clustering.clusters.getNumberClusters()):
            cluster = clustering.clusters.getCluster(i)
            metric = cluster.getMetric()
            if metric is not None and metric < self.metricValue:
                return True
            self.lastCheckedCluster = i
        return False


class RunnerBuilder:

    def build(self, simulationRunnerBlock):
        simulationType = simulationRunnerBlock[blockNames.SimulationType.type]
        paramsBlock = simulationRunnerBlock[blockNames.SimulationParams.params]
        params = SimulationParameters()
        if simulationType == blockNames.SimulationType.pele:
            params.processors = paramsBlock[blockNames.SimulationParams.processors]
            params.dataFolder = paramsBlock.get(blockNames.SimulationParams.dataFolder, constants.DATA_FOLDER)
            params.documentsFolder = paramsBlock.get(blockNames.SimulationParams.documentsFolder, constants.DOCUMENTS_FOLDER)
            params.executable = paramsBlock.get(blockNames.SimulationParams.executable, constants.PELE_EXECUTABLE)
            params.templetizedControlFile = paramsBlock[blockNames.SimulationParams.templetizedControlFile]
            params.iterations = paramsBlock[blockNames.SimulationParams.iterations]
            params.peleSteps = paramsBlock[blockNames.SimulationParams.peleSteps]
            params.seed = paramsBlock[blockNames.SimulationParams.seed]
            exitConditionBlock = paramsBlock.get(blockNames.SimulationParams.exitCondition, None)
            if exitConditionBlock:
                exitConditionBuilder = ExitConditionBuilder()
                params.exitCondition = exitConditionBuilder.build(exitConditionBlock)

            SimulationRunner = PeleSimulation(params)
        elif simulationType == blockNames.SimulationType.md:
            pass
        elif simulationType == blockNames.SimulationType.test:
            params.processors = paramsBlock[blockNames.SimulationParams.processors]
            params.destination = paramsBlock[blockNames.SimulationParams.destination]
            params.origin = paramsBlock[blockNames.SimulationParams.origin]
            params.iterations = paramsBlock[blockNames.SimulationParams.iterations]
            params.peleSteps = paramsBlock[blockNames.SimulationParams.peleSteps]
            params.seed = paramsBlock[blockNames.SimulationParams.seed]
            SimulationRunner = TestSimulation(params)
        else:
            sys.exit("Unknown simulation type! Choices are: " + str(simulationTypes.SIMULATION_TYPE_TO_STRING_DICTIONARY.values()))
        return SimulationRunner
