import os
import shutil
import numpy as np
import pickle
from atomset import atomset, RMSDCalculator


def cleanup(tmpFolder):
    if os.path.exists(tmpFolder):
        shutil.rmtree(tmpFolder)


def makeFolder(outputDir):
    if not os.path.exists(outputDir):
        os.makedirs(outputDir)


def getSnapshots(trajectoryFile, verbose=False):
    inputFile = open(trajectoryFile, "r")
    inputFileContent = inputFile.read()

    snapshots = inputFileContent.split("ENDMDL")[:-1]
    if not verbose:
        return snapshots

    remarkInfo = "REMARK 000 File created using PELE++\nREMARK source            : %s\nREMARK original model nr : %d\nREMARK First snapshot is 1, not 0 (as opposed to report)\n"
    snapshotsWithInfo = [remarkInfo % (trajectoryFile, i+1)+snapshot for i, snapshot in enumerate(snapshots)]
    return snapshotsWithInfo


def getTrajNum(trajFilename):
    return int(trajFilename.split("_")[-1][:-4])


def calculateContactMapEigen(contactMap):
    nLig, nCA = contactMap.shape
    extendedCM = np.zeros((nLig+nCA, nLig+nCA))
    extendedCM[nCA:, :nCA] = contactMap
    extendedCM[:nCA, nCA:] = contactMap.T
    assert (extendedCM == extendedCM.T).all(), "Extended ContactMap not symmetric"
    eiv, eic = np.linalg.eigh(extendedCM)
    return eiv, eic


def assertSymmetriesDict(symmetries, PDB):
    for group in symmetries:
        for key in group:
            assert key in PDB.atoms, "Symmetry atom %s not found in initial structure" % key
    if symmetries:
        print "Symmetry dictionary correctly defined!"


def getRMSD(traj, nativePDB, resname, symmetries):
    snapshots = getSnapshots(traj)
    rmsds = np.zeros(len(snapshots))
    RMSDCalc = RMSDCalculator.RMSDCalculator(symmetries)
    for i, snapshot in enumerate(snapshots):
        snapshotPDB = atomset.PDB()
        snapshotPDB.initialise(snapshot, resname=resname)

        rmsds[i] = RMSDCalc.computeRMSD(nativePDB, snapshotPDB)

    return rmsds


def readClusteringObject(clusteringObjectPath):
    with open(clusteringObjectPath, 'rb') as f:
        try:
            return pickle.load(f)
        except EOFError:
            raise EOFError("Empty clustering object!")
