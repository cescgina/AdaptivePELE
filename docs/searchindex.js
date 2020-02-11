Search.setIndex({docnames:["AdaptivePELE","AdaptivePELE.analysis","AdaptivePELE.atomset","AdaptivePELE.clustering","AdaptivePELE.simulation","AdaptivePELE.spawning","AdaptivePELE.utilities","AdaptivePELE.validator","Changelog","Problems","UserManual","index"],envversion:52,filenames:["AdaptivePELE.rst","AdaptivePELE.analysis.rst","AdaptivePELE.atomset.rst","AdaptivePELE.clustering.rst","AdaptivePELE.simulation.rst","AdaptivePELE.spawning.rst","AdaptivePELE.utilities.rst","AdaptivePELE.validator.rst","Changelog.rst","Problems.rst","UserManual.rst","index.rst"],objects:{"AdaptivePELE.analysis":{backtrackAdaptiveTrajectory:[1,0,0,"-"],correctRMSD:[1,0,0,"-"],foldersFirstBindingEvent:[1,0,0,"-"],makePNGs:[1,0,0,"-"],numberOfClusters:[1,0,0,"-"],plotAdaptive:[1,0,0,"-"],writeClusteringStructures:[1,0,0,"-"]},"AdaptivePELE.analysis.backtrackAdaptiveTrajectory":{main:[1,1,1,""],parseArguments:[1,1,1,""]},"AdaptivePELE.analysis.correctRMSD":{calculate_rmsd_traj:[1,1,1,""],main:[1,1,1,""],parseArguments:[1,1,1,""],readControlFile:[1,1,1,""]},"AdaptivePELE.analysis.foldersFirstBindingEvent":{main:[1,1,1,""],parseArguments:[1,1,1,""]},"AdaptivePELE.analysis.makePNGs":{parseArguments:[1,1,1,""]},"AdaptivePELE.analysis.numberOfClusters":{buildClustersPerValue:[1,1,1,""],findDifferentClustersForAllEpochs:[1,1,1,""],findDifferentClustersInEpoch:[1,1,1,""],getAllDifferentValues:[1,1,1,""],getClusteringSummaryContent:[1,1,1,""],getNumberOfClustersPerEpochForGivenColumn:[1,1,1,""],getTotalNumberOfClustersPerEpoch:[1,1,1,""],main:[1,1,1,""],plotClustersPerValue:[1,1,1,""],plotContactsHistogram:[1,1,1,""],printHelp:[1,1,1,""]},"AdaptivePELE.analysis.plotAdaptive":{addLine:[1,1,1,""],createPlot:[1,1,1,""],generatePlot:[1,1,1,""],parseArguments:[1,1,1,""]},"AdaptivePELE.analysis.writeClusteringStructures":{main:[1,1,1,""],parseArgs:[1,1,1,""]},"AdaptivePELE.atomset":{RMSDCalculator:[2,0,0,"-"],SymmetryContactMapEvaluator:[2,0,0,"-"],atomset:[2,0,0,"-"]},"AdaptivePELE.atomset.RMSDCalculator":{RMSDCalculator:[2,2,1,""]},"AdaptivePELE.atomset.RMSDCalculator.RMSDCalculator":{computeNonSymmAtoms:[2,3,1,""],computeRMSD2:[2,3,1,""],computeRMSD:[2,3,1,""],nonSymmetricalAtomsSet:[2,4,1,""],symmetries:[2,4,1,""]},"AdaptivePELE.atomset.SymmetryContactMapEvaluator":{SymmetryContactMapEvaluator:[2,2,1,""],calculateCorrelationContactMaps:[2,1,1,""]},"AdaptivePELE.atomset.SymmetryContactMapEvaluator.SymmetryContactMapEvaluator":{buildContactMap:[2,3,1,""],buildContactMapWithRowMap:[2,3,1,""],buildOptimalPermutationContactMap:[2,3,1,""],createContactMap:[2,3,1,""],evaluateCorrelation:[2,3,1,""],evaluateDifferenceDistance:[2,3,1,""],evaluateJaccard:[2,3,1,""],ligandList:[2,4,1,""],proteinList:[2,4,1,""],symToRowMap:[2,4,1,""],symmetricAtoms:[2,4,1,""],symmetries:[2,4,1,""]},"AdaptivePELE.atomset.atomset":{Atom:[2,2,1,""],PDB:[2,2,1,""],computeCOMDifference:[2,1,1,""],computeCOMSquaredDifference:[2,1,1,""],computeSquaredCentroidDifference:[2,1,1,""],readPDB:[2,1,1,""]},"AdaptivePELE.atomset.atomset.Atom":{atomSerial:[2,4,1,""],equivalentResname:[2,3,1,""],getAtomCoords:[2,3,1,""],id:[2,4,1,""],isHeavyAtom:[2,3,1,""],isHeteroAtom:[2,3,1,""],isProtein:[2,3,1,""],mass:[2,4,1,""],name:[2,4,1,""],printAtom:[2,3,1,""],protein:[2,4,1,""],resChain:[2,4,1,""],resname:[2,4,1,""],resnum:[2,4,1,""],set_properties:[2,3,1,""],squaredDistance:[2,3,1,""],type:[2,4,1,""],x:[2,4,1,""],y:[2,4,1,""],z:[2,4,1,""]},"AdaptivePELE.atomset.atomset.PDB":{ATOM_LINE_TEMPLATE:[2,4,1,""],CMAtoms:[2,4,1,""],atomList:[2,4,1,""],atoms:[2,4,1,""],centroid:[2,4,1,""],com:[2,4,1,""],computeTotalMass:[2,3,1,""],countContacts:[2,3,1,""],extractCOM:[2,3,1,""],extractCentroid:[2,3,1,""],getAtom:[2,3,1,""],getCOM:[2,3,1,""],getCentroid:[2,3,1,""],getNumberOfAtoms:[2,3,1,""],get_pdb_string:[2,3,1,""],initialise:[2,3,1,""],isfromPDBFile:[2,3,1,""],ispdb:[2,4,1,""],join_PDB_lines:[2,3,1,""],pdb:[2,4,1,""],printAtoms:[2,3,1,""],totalMass:[2,4,1,""],updateCoords:[2,3,1,""],writePDB:[2,3,1,""]},"AdaptivePELE.clustering":{clusteringTypes:[3,0,0,"-"],thresholdcalculator:[3,0,0,"-"],thresholdcalculatortypes:[3,0,0,"-"]},"AdaptivePELE.clustering.clusteringTypes":{CLUSTERING_TYPES:[3,2,1,""],SIMILARITY_TYPES:[3,2,1,""]},"AdaptivePELE.clustering.clusteringTypes.CLUSTERING_TYPES":{"null":[3,4,1,""],MSMClustering:[3,4,1,""],contactMap:[3,4,1,""],lastSnapshot:[3,4,1,""],rmsd:[3,4,1,""]},"AdaptivePELE.clustering.clusteringTypes.SIMILARITY_TYPES":{Jaccard:[3,4,1,""],correlation:[3,4,1,""],differenceDistance:[3,4,1,""]},"AdaptivePELE.clustering.thresholdcalculator":{ThresholdCalculator:[3,2,1,""],ThresholdCalculatorBuilder:[3,2,1,""],ThresholdCalculatorConstant:[3,2,1,""],ThresholdCalculatorHeaviside:[3,2,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculator":{calculate:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculatorBuilder":{build:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculatorConstant":{calculate:[3,3,1,""],getMaxThreshold:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculator.ThresholdCalculatorHeaviside":{calculate:[3,3,1,""],getMaxThreshold:[3,3,1,""]},"AdaptivePELE.clustering.thresholdcalculatortypes":{THRESHOLD_CALCULATOR_TYPES:[3,2,1,""]},"AdaptivePELE.clustering.thresholdcalculatortypes.THRESHOLD_CALCULATOR_TYPES":{constant:[3,4,1,""],heaviside:[3,4,1,""]},"AdaptivePELE.simulation":{simulationTypes:[4,0,0,"-"]},"AdaptivePELE.simulation.simulationTypes":{EXITCONDITION_TYPE:[4,2,1,""],SIMULATION_TYPE:[4,2,1,""]},"AdaptivePELE.simulation.simulationTypes.EXITCONDITION_TYPE":{CLUSTERING:[4,4,1,""],METRIC:[4,4,1,""],METRICMULTIPLETRAJS:[4,4,1,""]},"AdaptivePELE.simulation.simulationTypes.SIMULATION_TYPE":{MD:[4,4,1,""],PELE:[4,4,1,""],TEST:[4,4,1,""]},"AdaptivePELE.spawning":{densitycalculator:[5,0,0,"-"],densitycalculatortypes:[5,0,0,"-"],spawningTypes:[5,0,0,"-"]},"AdaptivePELE.spawning.densitycalculator":{ContinuousDensityCalculator:[5,2,1,""],DensityCalculator:[5,2,1,""],DensityCalculatorBuilder:[5,2,1,""],DensityCalculatorHeaviside:[5,2,1,""],ExitContinousDensityCalculator:[5,2,1,""],NullDensityCalculator:[5,2,1,""],continousDensity:[5,1,1,""]},"AdaptivePELE.spawning.densitycalculator.ContinuousDensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.DensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.DensityCalculatorBuilder":{build:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.DensityCalculatorHeaviside":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.ExitContinousDensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculator.NullDensityCalculator":{calculate:[5,3,1,""]},"AdaptivePELE.spawning.densitycalculatortypes":{DENSITY_CALCULATOR_TYPES:[5,2,1,""]},"AdaptivePELE.spawning.densitycalculatortypes.DENSITY_CALCULATOR_TYPES":{"null":[5,4,1,""],continuous:[5,4,1,""],exitContinous:[5,4,1,""],heaviside:[5,4,1,""]},"AdaptivePELE.spawning.spawningTypes":{EPSILON_VARIATION_TYPES:[5,2,1,""],SPAWNING_TYPES:[5,2,1,""]},"AdaptivePELE.spawning.spawningTypes.EPSILON_VARIATION_TYPES":{contactsVariation:[5,4,1,""],linearVariation:[5,4,1,""]},"AdaptivePELE.spawning.spawningTypes.SPAWNING_TYPES":{"null":[5,4,1,""],FAST:[5,4,1,""],IndependentMSMCalculator:[5,4,1,""],MetastabilityMSMCalculator:[5,4,1,""],ProbabilityMSMCalculator:[5,4,1,""],REAP:[5,4,1,""],UCB:[5,4,1,""],UncertaintyMSMCalculator:[5,4,1,""],epsilon:[5,4,1,""],independent:[5,4,1,""],independentMetric:[5,4,1,""],inverselyProportional:[5,4,1,""],sameWeight:[5,4,1,""],simulatedAnnealing:[5,4,1,""],variableEpsilon:[5,4,1,""]},"AdaptivePELE.validator":{controlFileValidator:[7,0,0,"-"]},"AdaptivePELE.validator.controlFileValidator":{validate:[7,1,1,""],validateBlock:[7,1,1,""],validateGeneralBlock:[7,1,1,""]},AdaptivePELE:{__init__:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"1xn":[],"3ptb":10,"3ptb_a_1000":10,"3ptb_ad_md_mt":10,"3ptb_initi":10,"3ptb_md_parallel_mt":10,"4th":10,"500x":8,"abstract":[],"boolean":[2,10],"case":[3,5,8,9,10],"class":[2,3,4,5,8],"default":[],"export":[9,10],"final":10,"float":[1,2,3,5,10],"function":[2,8,10],"import":10,"int":[1,2,10],"long":10,"new":[1,3,10],"null":[3,5,8],"public":[],"return":[1,2,3,5,7,10],"short":10,"super":[],"switch":8,"true":[2,10],"while":10,Added:8,CYS:2,For:10,HIS:[2,8,10],Has:2,ILE:2,LYS:2,Not:9,One:[9,10],That:9,The:[1,2,8,10],There:[9,10],These:10,Using:10,With:9,__version__:8,abl:[8,9],abov:10,absolut:9,accept:[8,10],access:9,accod:[],accord:[1,3,5,8,10],account:[1,10],accumul:[],act:9,adapt:[1,7,9,10],adaptivemt:[],adaptivepel:[1,2,3,4,5,7,8,9],adaptivesampl:[8,10,11],add:[1,8,9,10],add_edg:[],add_nod:[],addclust:[],added:[8,10],addel:[],addit:[],addition:10,additionali:10,addlin:1,addsnapshottoclust:[],addstructur:[],advantag:10,aen:10,affect:[9,10],after:10,again:10,against:10,aim:10,ain:10,ala:2,algin:10,algorithm:[8,10],align:[],all:[1,2,8,10],alloc:[],allow:[8,10],alltraj:[],almost:9,along:10,alpha:[2,10],also:[8,9,10],altern:[8,10],alternativestructur:10,although:10,altselect:[],altspawnselect:[],altstructur:8,alwai:[5,9,10],amber99:[],amber:10,amberff:10,ambertool:10,among:[],amstrogm:2,amstrong:[2,10],analog:10,analys:[1,10],analysi:[0,8,11],angl:[],angstrom:[2,10],ani:[9,10],annot:8,antechamb:9,antechamberdict:[],apel:10,api:8,appli:10,appropi:[],approxim:8,arg:2,argument:[1,10],arm:10,around:11,arrai:2,articl:10,artist:1,arxiv:[],asid:10,ask:11,asn:2,asp:[2,10],aspect:10,ass:10,assert:[],assertionerror:[],assertsymmetriesdict:[],assess:10,assign:10,asyncresult:[],atom1:10,atom2:[2,10],atom:[2,8,9,10,11],atom_id:10,atom_line_templ:2,atomcont:2,atomid:2,atomlist:2,atomnam:[2,10],atomseri:2,atomset:[0,8,9,10],attribut:8,author:[],automat:[8,10],automateroundsadapt:11,automatesimul:[],avail:[10,11],averag:10,avoid:10,awai:2,axi:1,backtrack:8,backtrackadaptivetrajectori:[0,8],bactrackadaptivetrajectori:8,badg:[],bandit:10,barcelona:11,base:[2,3,5,8,10],basenam:10,basestr:2,bash:10,beauchamp:[],becaus:9,been:[7,9,10],befor:[9,10],beg:[],begin:[8,10],behavior:10,behaviour:[],being:10,belong:[8,10],below:10,ben:10,best:10,better:8,between:[2,10],bibtex:[],big:10,bin:10,bin_ct:10,bin_mt:10,binari:[8,10],bind:[1,10],biol:10,biophys:10,block:[3,5,7,8,11],blocknam:7,blue:[],bodi:[],boltzmann:10,bond:10,bool:[1,2,7,10],both:10,bottom:[],bound:10,box:[8,9,10],box_cent:10,box_radiu:10,boxcent:10,boxradiu:10,boxtyp:10,brook:[],bsc72021:[],bsc72755:10,bsc72:10,bsc:11,buffer:[],bug:9,build:[2,3,5],build_ext:[9,10],buildclust:[],buildclusterspervalu:1,buildcontactmap:2,buildcontactmapwithrowmap:2,builder:[],buildnewclusteringandwriteinitialstructuresinnewsimul:[],buildnewclusteringandwriteinitialstructuresinrestart:[],buildoptimalpermutationcontactmap:2,buildrevtransitionmatrixfunct:8,buildspawningcalcul:[],buildspawningparamet:[],built:[10,11],bulid:3,bulk:10,bullxmpi:10,bunch:10,burn:10,calcual:8,calcuat:5,calcul:[1,2,3,5,8],calculate_q:[],calculate_rmsd_traj:1,calculatecontactmapeigen:[],calculatecontactsvar:[],calculatecorrelationcontactmap:2,calculatedens:[],calculatedg:[],calculateepsilonvalu:[],calculateequilibrationlength:[],calculatenormalisedmetr:[],calculatenormaliseds:[],call:[2,8,10],calul:10,can:[8,10],cannot:9,carbon:[2,10],carri:8,caution:10,cblabel:1,ce1:2,cell:8,center:[2,8,9,10,11],centerpair:[],centroid:2,certain:[1,10],cescgina:11,ch2:2,chain:[2,8,10],chang:10,changelog:11,charg:10,check:[2,9,10],checkambertool:[],checkattribut:[],checker:[],checkexitcondit:[],checkintegrityclusteringobject:[],checkmetricexitconditionmultipletrajsinrestart:[],checkpoint:[],checkpointdir:[],checksimulationinterrupt:[],checksymmetrydict:[],chem:10,chodera:10,choos:10,chosen:[],chronolog:[],cite:[],cl1:9,classic:8,clean:[],cleancheckpointfil:[],cleancontactmap:[],cleanfil:[],cleanpq:[],cleanprevioussimul:[],cleanprocessesfil:[],cleantopolog:[],cleanup:[],clobject:1,clone:10,closer:10,closest:10,cluster:[0,1,2,4,8,9,11],cluster_:10,cluster_threshold_dist:10,clustercontactmap:2,clusterepochtraj:[],clusterequilibrationstructur:[],clustering_typ:3,clusteringblock:3,clusteringbuild:[],clusteringevalu:[],clusteringexitcondit:[],clusteringhook:[],clusteringmethod:[],clusteringobject:[],clusteringobjectpath:[],clusteringoutputobject:[],clusteringtyp:0,clusteringutil:0,clusteriter:[],clusterleav:[],clusternum:[],clusterpreviousepoch:[],clustersfilt:[],clustersperepoch:1,clusterspervalu:1,cmatom:2,cmclusteringevalu:[],cmsimilarityevalu:[],code:[8,10,11],col:[],col_filt:[],collect:[],color:[1,8],colorbar:[1,8],column1:1,column2:1,column:[1,2,8,10],columnofreportfil:[],com:[2,10,11],combin:10,come:[],command:[1,8,10],common:10,commut:10,comp:10,compar:[2,10],comparison:10,compat:[3,8,10],compil:[9,10],compilewrapp:10,complet:[8,10],complex:10,compliant:8,compon:10,comprehens:10,comput:[2,10],computecomdiffer:2,computecomsquareddiffer:2,computenonsymmatom:2,computermsd2:2,computermsd:2,computesquaredcentroiddiffer:2,computetemperatur:[],computetotalmass:2,cond:1,condit:[3,5,8],condtion:[],conect:[],conf:10,confid:10,configur:10,conform:[1,2,8,10],conformationnetwork:[],consdid:1,consid:[1,2,8,10],consider:8,consist:[],constant:[3,10],constrain:8,constraint:8,constraints_map:[],constraints_orig:[],constraintsminim:10,constraintsnpt:10,constraintsnvt:10,constrian:[],constrint:[],construct:10,conta:[],contact:[1,2,3,5,8,10],contactmap:[2,3,8],contactmapaccumulativeclust:[],contactsclust:[],contactsclusteringevalu:[],contactsvari:5,contactthreshold:[5,10],contactthresholddist:[2,10],contain:[1,2,7,9,10],contanct:2,content:[1,2],continousdens:5,continu:[5,8,10],continuousdensitycalcul:5,control:[1,5,7,8,11],control_fil:7,control_file_md_3ptb_mt:10,controlfil:[1,7,10],controlfileblock:7,controlfiledictionari:[],controlfilevalid:[0,8],convent:8,convert:10,convert_trajectory_to_pdb:[],converttrajectori:10,coord:[],coordin:[2,8,10],coords1:[],coords2:[],copi:[],copyinitialstructur:[],correct:[1,10],correctli:[],correctrmsd:0,correl:[2,3,8,10],correspond:[1,2,3,10],could:9,count:[2,10],countcontact:2,coupl:10,cpu:10,crash:8,creat:[1,2,8,10],createcontactmap:2,createmappingforfirstepoch:[],createmultiplecomplexesfilenam:[],createpathwaytoclust:[],createplot:1,createselectionstr:[],createsymboliclink:[],criteria:10,criterion:[],cte:10,cuda:10,current:10,currentepoch:[],custom:8,cutoff:10,cylind:[8,10],cylinderbas:10,cylindr:8,cym:10,cystein:10,cython:[8,9,10],cyx:10,daniel:[10,11],danielsoler93:[],data:[1,10],data_plot:1,dcd:[8,10],deal:[8,10],debug:10,decim:10,declar:9,decreas:10,def:10,defin:10,definit:[],defuault:10,degeneraci:[],degeneracyofrepres:[],delet:[],deltar:[],densiti:[1,5,8],density_calculator_typ:5,densitycalcul:0,densitycalculatorbuild:5,densitycalculatorheavisid:5,densitycalculatortyp:0,densityspawningcalcul:[],depend:[9,10],deprec:5,describ:10,descript:[10,11],desir:10,despit:10,destin:[],detail:10,detect:[8,10],determin:10,dev:[],develop:[3,10,11],devic:10,devicespertrajectori:10,diagram:10,dict:[1,3,5,7,10],dictionari:[1,2,7,8],dictonari:[],did:10,died:9,dies:9,differ:[1,2,8,10],differencedist:3,differenti:8,diffus:10,digit:10,dimens:[],dir:10,directli:10,directori:10,discov:[],discoveri:[1,8],discret:10,disk:10,distanc:[2,3,10],distancecom:[],distribut:[1,10],disulphid:10,divid:10,divideinverselyproportionaltoarrai:[],divideprocessorsmetricproport:[],divideproportionaltoarrai:[],dividetrajaccordingtoweight:[],doc:[],document:[8,10],doe:[9,10],doi:10,don:[],done:10,dtr:8,dtraj:[],dtype:[],due:[8,10],dum:9,dummi:9,dump:[],dure:[1,9],dynam:11,e1005659:10,each:[1,8,10],eapm:11,earli:3,easi:8,eastman:10,edg:10,edgelist:[],effect:10,effici:10,eigenvalu:[],eigenvector:[],either:10,electron:11,element:[1,10],emphasi:10,empti:2,emptyclust:[],encod:[],encount:9,encourag:10,end:[8,10],energi:[8,10,11],enhanc:[10,11],enough:10,ensur:[7,9,10],ensure_connectivity_msm:[],enter:10,entranc:10,entri:[],environ:[8,9],eoferror:[],epbh_l01:10,epoch:[1,8,10],epochdir:[],epochoutputpathtemplet:[],epsilon:[5,8,10],epsilon_variation_typ:5,epsilondegeneracycalcul:[],epsmax:[],equal:10,equat:[],equilbr:10,equilibr:[8,11],equilibrationclust:10,equilibrationfil:[],equilibrationlastsnapshot:10,equilibrationlength:10,equilibrationlengthnpt:10,equilibrationlengthnvt:10,equilibrationmod:10,equilibrationselect:10,equival:10,equivalentresnam:2,err:10,error:[7,8,9,10],essenti:[],establish:10,estim:10,estimatedg:8,estimatemsm:[],evalu:[8,10],evaluatecorrel:2,evaluatedifferencedist:2,evaluatejaccard:2,event:1,eventu:10,everi:[],evolut:10,exampl:[9,11],example1:10,example2:10,exceed:8,except:10,exclud:[],execut:10,exempl:10,exist:[8,10],exit:8,exitcondit:[8,10],exitcondition_typ:4,exitconditionblock:[],exitconditionbuild:[],exitcontin:5,exitcontinousdensitycalcul:5,exitcontinu:[8,10],exitvalu:10,exp:10,expand:[],expandinitialstructureswildcard:[],expect:10,experi:10,explor:[10,11],expos:10,express:[],extend:8,extendreportwithrmsd:[],extens:9,extent:8,extra:10,extract:[1,8,10],extractcentroid:2,extractcom:2,extractcoord:8,extractligand:[],extrem:10,fabritii:10,fail:[9,10],fals:[1,2,10],fast:[5,10],fastdegeneracycalcul:[],faster:8,fatal:9,fdt:[],featur:9,femtosecond:10,few:10,ff14sb:10,ff99sb:10,field:10,fifth:10,file:[1,2,5,7,8,11],filenam:[1,10],filter:10,filter_col:10,filter_valu:10,filterbymetr:10,filterclustersaccordingtobox:[],filterclustersaccordingtometr:[],filterrepeatedreport:[],finalepoch:[],find:9,finddifferentclustersforallepoch:1,finddifferentclustersinepoch:1,findfirstrun:[],fine:10,finer:10,finish:10,first:[1,2,8,10],firstrun:[],fit:[],five:10,fix:[],fixedcent:10,fixedreport_i:[],fixreportssymmetri:[],flag:[],flat:[],flow:10,flush:[],fmt_str:1,folder:[1,10],foldersfirstbindingev:0,follow:[8,9,10],forcefield:10,form:10,format:[1,2,8,10],format_str:1,former:10,found:[7,9],four:10,fracc:[],fraction:10,fragment:1,frame:[],framework:10,francesc:11,frcmod:[],free:8,freeenergi:[8,9],frequenc:10,frequent:11,from:[1,2,10],furthermor:10,futur:[],gaff:10,gap:[8,10],gen_atom_nam:[],gener:[1,8,10],generalparam:[7,11],generatenestedstr:[],generateplot:1,generateprintstr:[],generaterotationmatrixaroundaxi:[],generatetrajectoryselectionstr:[],geometri:10,get:[1,2,9,10],get_available_backend:[],get_epoch_fold:[],get_mdtraj_object_pdbstr:[],get_pdb_str:2,get_workers_output:[],getalldifferentvalu:1,getalltrajectori:[],getatom:2,getatomcoord:2,getatomnam:[],getcentroid:2,getclust:[],getclusteringinfo:[],getclusteringsummarycont:1,getclusterlistforspawn:[],getcom:2,getcontact:[],getcpucount:[],getequilibrationcontrolfil:[],getfileextens:[],getinnerlimit:[],getmaxthreshold:3,getmetr:[],getmetriccolumn:[],getmetricfromcolumn:[],getmetricsfromcolumn:[],getmetricsfromreportsinepoch:[],getnextiterationbox:[],getnumberclust:[],getnumberofatom:2,getnumberofclustersperepochforgivencolumn:1,getnumreplica:[],getoptimalmetr:[],getpelecontrolfiledict:[],getprmtopnum:[],getreportandtrajectorywildcard:[],getreportnum:[],getresnam:[],getrmsd:[],getsasacolumnfromcontrolfil:[],getsasavalu:[],getsiz:[],getsnapshot:[],getsortedeigen:[],getstationarydistr:[],gettopolog:[],gettopologyfil:[],gettopologyfromindex:[],gettopologyindex:[],gettopologyobject:[],gettotalnumberofclustersperepoch:1,gettrajnum:[],getworkingclusteringobjectandreclusterifnecessari:[],getworkingprocessor:[],gilabert:[10,11],giorgino:10,git:10,github:[10,11],give:10,given:[8,10],gln:2,glu:2,gly:2,gmail:11,gnuplot:[1,8],gnuplotstr:[],good:8,gpf:10,gpu:[8,11],gpus_:[],gracia:11,gradual:10,gre:10,great:10,greater:[8,10],grop:11,gropu:2,group:[1,8,10],guallar:10,guid:10,had:8,handl:[8,9,10],happen:9,harrigan:[],has:[1,2,7,9,10],haschang:10,hasexitcondit:[],have:[1,9,10],heavi:[2,8,10],heavisid:[3,5,10],heavyatom:[],held:10,help:10,helper:2,here:10,hernandez:10,hetero:2,hid:[2,10],hie:[2,10],high:10,higher:10,hip:[2,10],histidin:10,histogram:[1,8,10],home:[],hook:11,hook_funct:10,how:[8,10],howev:10,html:[],http:10,id_replica:[],identif:10,identifi:[8,10],identifyclustersnapshot:8,ignor:[8,10],ignorefirstrow:[],imag:1,img:[],immedi:[],implement:[8,10],importerror:9,impos:10,improv:8,includ:[9,10],incorrect:8,increas:10,independ:[5,8,10],independentmetr:[5,8,10],independentmetriccalcul:[],independentmsm:10,independentmsmcalcul:5,independentrunscalcul:[],index:[8,10,11],indexerror:[],indic:[2,10],info:2,inform:[2,8,10],inherit:[],initi:[8,10],initial1:10,initial2:10,initialis:2,initialstructur:10,initialstructuresasstr:[],initialstructureswildcard:[],initialstructurewildcard:[],innefici:10,inpcrd:[],inplac:[9,10],input:[8,11],input_fil:[],inputfiletempl:[],inputtempl:[],insert:[],insertclust:[],instal:[8,9,11],instanc:[],instead:10,integ:[2,10],integr:10,intel:10,interact:10,interest:[1,10],interfac:[1,8,10],interpret:9,interrupt:[],intersect:[],interst:[],intial:10,introduc:[8,9],invers:[8,10],inverselyproport:[5,10],inverselyproportionaltopopulationcalcul:[],ion:10,isel:[],isfrompdbfil:2,isheavyatom:2,isheteroatom:2,ispdb:2,isprotein:2,issimilarclust:[],issn:[],issu:[9,10],iter:10,iteraet:[],its:[2,8,10],jaccard:[3,8,10],joan:[10,11],job:10,join:[],join_coordinates_prob:[],join_pdb_lin:2,journal:10,json:10,jsondict:[],jsonparam:[],jsonstr:[],just:10,k80:10,kcal:10,keep:[8,10],keepachangelog:[],kei:10,keller:10,kelvin:10,kept:10,keyerror:2,keyword:[],kind:1,kindofprint:1,kinet:10,kmean:10,know:[],kwarg:[],l01:10,label:1,label_colorbar:1,label_i:1,label_x:1,lagtim:10,lambda:[],landscap:[10,11],last:10,lastsnapshot:[3,8],latest:10,launch:10,lbesson:[],lead:10,leader:10,learn:[],least:10,lecina2017:[],lecina:[10,11],led:1,left:[],len:10,lenght:[],length:10,less:[2,10],letter:[],leu:2,level:8,lib:10,librari:10,licens:11,life:[9,10],ligand:[1,2,9,10],ligandchain:10,ligandcharg:10,ligandlist:2,ligandnam:[8,10],ligandreschain:2,ligandresnam:[2,10],ligandresnum:[2,10],like:[9,10],limit:10,limitmax:[],limitslop:[],line:[1,2,8,10],linear:10,linearvari:[5,10],link:8,list:[1,2,8,9,10],liststructur:[],load:[2,10],loadparam:[],loadreportfil:[],loadtxtfil:[],local:10,locat:10,location_of_adaptivepel:[],log:[],logvariableepsilon:[],look:10,lose:10,low:8,lower:10,lowesteigenvector:[],machin:10,mai:10,main:[1,8,10],maintain:[],make:[8,10],makefold:[],makepng:0,makeworkingcontrolfil:[],mandatori:10,mani:[2,10],manual:11,map:[2,8,10],mapepochtopolog:[],marenostrum:10,mark:10,markov:10,mass:[2,10],massless:9,match:[9,10],matplotlib:8,matric:10,matrix:[2,8,10],max:[8,10],maxdevicesperreplica:10,maxepsilon:10,maxepsilonwindow:10,maxim:[2,10],maximum:[2,3,10],mcgibbon:10,md_data:10,md_pk2_evoct:10,mdcrd:8,mdsimul:[],mdsimulationrunn:[],mdtraj:[8,10],mean:[1,9,10],measur:10,median:1,meet:10,member:[],memori:10,merg:[],mergefilteredclustersaccordingtobox:[],messag:9,met:2,metal:10,metast:10,metastabilitymsm:10,metastabilitymsmcalcul:5,method:[2,3,8,10,11],metric:[1,4,8,10],metriccol:10,metriccolumninreport:10,metricexitcondit:[],metricmultipletraj:4,metricmultipletrajectori:[8,10],metricmultipletrajsexitcondit:[],metricvalu:[],metricweight:10,middl:[],might:[9,10],min:10,mind:10,minepsilon:10,minim:[8,10],minimi:10,minimizationiter:10,minimum:10,minor:[8,10],minotauro:10,minpo:10,mismatch:8,miss:9,mit:11,mode:10,model:[8,10,11],modemovingbox:10,modern:10,modifi:8,modul:[8,9,10,11],mol2:[],mol:10,molecul:[1,10],molecular:[10,11],moment:10,more:8,most:[9,10],move:[8,9],mpi:9,mpiparamet:10,mpirun:10,msm:8,msmcalcul:[],msmcluster:[3,8],much:10,multi:10,multinod:10,multipl:[8,10],multiplecomplex:10,multiprocess:8,must:10,mxm:9,mxn:[],n_cluster:[],name:[1,2,8,9,10],nan:8,nanomet:10,nativ:[1,10],nativepdb:1,nativestructur:10,natur:10,ncluster:10,ndarrai:1,necessari:10,need:[8,9,10],needtoreclust:[],neg:[],network:8,networkx:[],new_report:1,newclusteringmethod:[],newer:8,next:10,node:10,noe:10,non:[8,11],nonbond:10,nonbondedcutoff:10,none:[1,3,5,10],nonsymmetricalatomsset:2,nord:9,normal:[],normalisearrai:[],notabl:8,note:10,now:8,nprocessor:1,npt:10,nptequilibr:[],ntask:10,ntraj:[],nullclust:[],nulldensitycalcul:5,nullspawningcalcul:[],number:[1,2,8,10],numberequilibrationstructur:10,numberofclust:[0,10],numberofepoch:1,numberofpelestep:10,numberofsnapshot:[],numbertrajectori:10,numbertrajectoriess:10,numcol:[],numpi:2,numreplica:10,numtraj:[],nvt:10,nvtequilibr:[],object:[1,2,3,5,8,10],object_to_writ:[],objectpath:[],obtain:10,occup:10,occur:10,oct:[],ocur:1,od1:[2,10],od2:10,odd:8,oe1:2,often:9,old:8,oldclusteringmethod:[],ompi_mca_coll_hcoll_en:9,ompi_mca_mtl:9,one:[2,5,8,9,10],ones:10,oni:10,onl:[],onli:[3,8,10],open:10,opencl:10,openmm:8,openmm_3ptb:10,opt_dict:1,optim:[8,10],option:[1,8,9,10],optionalclass:10,order:[3,10],org:10,origclust:[],origin:[8,10],originalcontrolfil:[],oriol:11,oriolgracar:[],other:[8,9],otherwis:[2,10],otion:8,ought:10,ouput:[],our:10,out:[8,10],out_filenam:1,outlin:11,output:[1,8,11],output_fil:[],output_fold:1,output_path:10,output_pdb:10,outputdir:[],outputfilenam:1,outputfold:[],outputobject:[],outputpath:[1,10],outputpathconst:[],outputpdb:[],outsid:10,outupt_pdb:10,over:[8,10],overal:10,overcom:10,oversubscrib:10,overview:11,oxygen:10,packag:[8,9,10,11],packages_minot:10,page:[10,11],pair:10,palettemodifi:1,pand:[],paper:10,parallel:8,param:[2,10],paramat:[],paramet:[1,2,3,5,7,8],parmchk2:[],parmchkdict:[],pars:[1,2],parsearg:1,parseargu:1,part:8,partial:[],particular:[9,10],particularli:10,pass:[1,3,10],path:[1,2,8,9,10],path_out:1,path_to_sav:1,pathwai:[],paul:10,pdb1:2,pdb2:2,pdb:[1,2,8,11],pdb_file:[],pdbfile:2,pdbobj:2,pdbstr:[],pdbtoopen:[],pele:[4,8,9,11],pele_rev12025_mpi:10,pele_step:10,pelecontrolfiledict:[],pelecontrolfiledictionari:[],pelesimul:[],pelestep:10,per:[1,10],perez:10,perform:[8,10,11],period:10,permit:10,permut:2,persist:[],phe:2,phy:10,pickl:8,piec:[],pip:[8,10],pkl:8,placehold:[],plan:[],platform:10,platformn:10,pleas:[],plo:10,plot3dnetwork:8,plot:[1,8,10],plotadapt:[0,8,10],plotclusterspervalu:1,plotcontactshistogram:1,plotspawningclust:8,pmf:10,pmf_xyzg:[],pmid:[],png:[1,10],poch:[],pocket:10,point:[1,8,10],pool:[],popul:[8,10],pose:10,posibl:8,posit:10,possibl:[3,7,8,10],post:[],postprocess:[8,10],potenti:10,power:10,precis:[8,10],prefer:10,prepar:[9,11],preparecontrolfil:[],prepareligand:[],preparepdb:[],preparepelecontrolfil:[],preprocess:10,present:10,preserv:8,pressur:10,previo:[],previou:[9,10],print:[2,10],print_unbuff:[],printatom:2,printclust:[],printhelp:1,printruninfo:[],printwithlin:1,prinz:10,prioriti:8,prmtop:[],prmtopfilenam:[],pro:2,probabilitymsm:10,probabilitymsmcalcul:5,probabl:10,problem:[],problemat:10,procedur:[8,11],process:10,processesmanag:[],processmanag:[],processor:[1,8,10],processormap:[],processorstoclustermap:[],processtraj:[],processtrajectori:[],produc:[9,10],product:10,productionlength:10,progag:10,program:10,project:[8,10],propag:10,proper:8,properli:9,properti:10,proport:10,proportin:8,proportion:10,protein:[2,10,11],proteinlist:2,protocol:[],proton:[8,10],provid:10,publicli:11,purg:10,purpos:3,pyemma:8,pyemma_script:8,pypi:10,python2:8,python3:8,python:[8,9,10,11],pythonpath:[9,10],qii:[],quadrat:8,question:11,queue:8,quick:[],quit:10,radiu:10,rais:[2,7,8],random:10,randomli:8,rang:[1,8,10],rapid:10,ratio:[3,5,10],ration:10,rawdata:8,reach:10,reaction:[],read:8,readclusteringobject:[],readconstraint:[],readcontrolfil:1,readmappingfromdisk:[],readpdb:2,readprocessormappingfromdisk:[],real:10,reap:[5,8],reapcalcul:[],reclust:10,recogn:9,recommend:10,reconstruct:8,recov:10,recreat:1,redirect:10,redo:[],redon:[],refer:[8,10],regardless:10,region:10,regular:10,reinforc:[],reject:8,rel:[8,10],relat:[1,2,8,9,10],releas:[],relev:[],reli:[8,10],reload:[],remov:[],renam:10,repeat:8,replica:[8,10],replotfirst:[],repo:9,report:[1,8,10],report_:10,report_nam:10,reportbasefilenam:[],reporterfrequ:10,reportfil:[],reportfilenam:10,reportnam:[1,8,10],reportpath:10,reportwildcard:[],repositori:9,repres:[1,8,10],represent:[],request:10,requier:[9,10],requir:[3,9,10],res1:10,res2:10,reschain:2,research:[],residu:[2,8,9,10],resnam:[1,2,8],resnum1:10,resnum2:10,resnum:[2,8],resourc:10,respect:[],respons:10,rest:10,restart:[8,10],restrain:10,restraint:10,restrict:10,restructur:8,result:10,resum:10,retrac:[],retriev:[],return_sign:[],rev12025:10,rew:[],reward:10,rewrit:10,right:[],rmsd:[1,2,3,8],rmsdcalcul:[2,9],rmsdcalculator_object:[],rmsdcolinreport:1,rmsf:8,robert:10,robust:8,root:[],row:[2,10],run:[1,8,9,11],runequilibr:10,runequilibrationpel:[],runner:[],runnerbuild:[],runningcontrolfil:[],runningplatform:10,runsimul:[],runtleap:[],s41598:10,said:[8,10],same:[8,10],sameweight:[5,10],sameweightdegeneracycalcul:[],sampl:[7,10,11],sarich:10,sasa:10,sasa_column:10,satisfi:[],save:[1,10],saveinitialcontrolfil:[],sbatch:10,sch:9,schuett:10,scientif:10,score:8,scratch:10,screenshot:[],script:[8,9,10],search:11,second:[2,10],section:[9,10],see:10,seed:10,seemesli:8,seemingli:8,selct:5,select:[1,3,5,8,10],selectequilibratedstructur:[],selectequilibrationlastsnapshot:[],selectinitialboxcent:[],selectonplot:8,self:10,senn:10,separ:[8,10],sequenti:[1,8],sequentiallastsnapshotclust:[],ser:2,serial:[8,10],set:[1,8,10],set_properti:2,setcol:[],setprocessor:[],settopolog:[],setup:[8,9,10],setzeromap:[],sever:[8,10],shamsi:[],shield:[],should:10,shouldwritestructur:[],show:[8,10],shown:10,sidechain:10,sign:[],similar:[2,8,9,10],similarity_typ:3,similaritycolumn:[],similarityevalu:10,similarityevaluatorbuild:[],similarityevaluatortyp:[],similariyevalu:[],similarli:10,similirati:[],simmonett:[],simpl:10,simpli:10,simul:[0,1,8,9,11],simulatedann:5,simulatedannealingcalcul:[],simulatioi:[],simulation_prova_constraint:10,simulation_step:[],simulation_typ:4,simulationoutput:10,simulationparamet:[],simulationrunn:[0,8],simulationrunnerblock:[],simulationrunnerparam:[],simulationtyp:0,sinc:10,singl:8,site:[9,10],size:10,sizepq:[],skip:8,sligthli:10,slow:10,slurm:10,smaller:10,snapshot:[1,8,10],snapshotnum:[],snaptshot:[],softwar:10,sole:10,soler:11,solid:1,solv:9,solvat:10,some:[8,9,10],sometim:9,sort:[],sound:10,sourc:[1,3,4,5,7,9,10],spawn:[0,8,11],spawning_typ:5,spawningalgorithmbuild:[],spawningblock:5,spawningbuild:[],spawningcalcul:[],spawningparam:[],spawningreportnam:[],spawningtyp:0,specif:[],specifi:[1,7,10],speed:[8,10],sphere:10,spheric:[9,10],split:[],splittrajectori:10,squar:2,squareddist:2,srun:[8,10],srunparamet:[8,10],stand:10,standard:[8,10],start:[8,10],state:10,stationari:10,statist:1,std:1,step:[1,8,10],stepsperepoch:1,stepsperrun:1,stern:[],still:10,stop:10,store:[1,8,10],str:[1,7,10],strategi:10,strength:10,string:[1,2,8,10],struct:10,structur:[1,8,10],structurenumb:[],strucutr:[],strutctur:[],studi:10,sub:[],subclass:[],subclust:8,subdirectori:10,subpackag:[8,10,11],subset:10,substitu:[],substitut:10,suffici:10,sum:[],summar:10,summari:[1,10],summaryfil:1,sup:[],supercomput:11,superpos:[],suport:8,support:[8,10],surfac:10,surpass:[],svg:[],swail:[],symbol:8,symcontactmapevalu:[],symmetr:[2,10],symmetri:[1,2,8,10],symmetricalatomid:2,symmetricatom:2,symmetrycontactmapevalu:[2,9],symmetryevalu:[],symtorowmap:2,synchron:8,system:10,tab:[],tabl:[],take:[1,10],target:[],task:10,team:10,temperatur:10,templat:[1,8,10],templet:[],templetized_pk2_evoct_md:10,templetizedclusteringsummaryfil:1,templetizedcontrolfil:[],templetizedpelecontrolfil:10,tenth:10,ter:8,termin:10,test:[4,8,10],test_3ptb_ad_md_mt:10,testsimul:[],text:8,than:[2,8,10],thei:10,them:[8,10],theori:10,therefor:10,theshold:[],thi:[1,3,5,8,9,10],thing:[],third:[1,8,10],those:10,thr:2,three:10,threshold:[1,3,10],threshold_calculator_typ:3,thresholdcalcul:0,thresholdcalculatorbuild:3,thresholdcalculatorconst:3,thresholdcalculatorheavisid:3,thresholdcalculatortyp:0,thresholdcaulcualtor:3,thresholdradiu:[],through:8,tica:10,tica_commute_map:10,tica_kinetic_map:10,tica_lagtim:10,tica_n:10,time:[8,10],timestep:10,tini:10,tinker:10,tipic:9,titl:[],tleap:9,tleapcontrolfil:[],tmpfolder:[],tmpinitialstructurestempl:[],togeth:[],tol:[],toler:[],tool:10,top:[1,10],toplog:[],topolgi:8,topolog:[1,8,10],topology_fil:[],topologycompat:[],topologyfil:[],topologyfilesiter:[],topoloi:[],total:[1,2,10],totalmass:2,totalnumberofstep:[],toward:10,traj:1,traj_num:1,trajecotori:[],trajecotri:[],trajectori:[1,8,9,11],trajectoriesperreplica:[],trajectory_0_3:10,trajectory_10:10,trajectory_3:10,trajectory_fil:[],trajectory_nam:10,trajectory_numb:[],trajectoryfil:[],trajectorymap:[],trajectorynam:10,trajectorypath:10,trajfilenam:[],trajnam:1,trajnum:[],trajpath:[],trajposit:[],trajs_rang:1,trajs_to_select:1,trajtodistribut:[],trajtodivid:[],trajwildcard:[],transit:10,trantion:[],tree:8,treshold:[3,10],tri:10,trp:2,trr:8,tune:10,tupl:1,two:[1,2,10],txt:[],type:[2,7,9],typeevalu:[],typic:10,tyr:2,ucb:[5,8,10],ucbcalcul:[],unbind:[1,10],uncertaintymsmcalcul:5,uncheck:[],unconstrain:10,under:11,uneed:[],unicod:8,uniformli:10,unifyreportnam:[],union:[],univoqu:10,unless:10,unnecessari:[],unreleas:11,unsatisfieddependencyexcept:9,until:[8,10],updat:[8,9],updateconstraint:[],updatecoord:2,updateindex:[],updatemappingprocessor:[],updaterepeatparamet:[],upper:10,url:[],usag:10,use:[1,10],use_beta:[],use_pdb:1,usecol:[],used:[8,10],useful:10,user:11,userguid:[],uses:10,usesrun:10,using:[1,8,9],util:[0,9],val:2,valid:[0,10],validateblock:7,validategeneralblock:7,valu:[1,2,3,5,9,10],valueerror:7,varepsilontyp:10,vari:10,variabl:9,variableepsilon:[5,10],variableepsilondegeneracycalcul:[],variat:10,variationwindow:10,variou:8,veloc:[],verbos:[],veri:10,version:[2,10],vgl:10,via:8,victor:10,visibl:8,visual:8,volum:10,wai:[8,10],wait:[],wait_tim:[],wang:[],want:10,warn:[7,10],water:10,waterboxs:10,weight:10,weigth:10,weird:9,well:10,were:10,wether:[1,10],what:[],when:[8,9,10],where:[1,2,8,10],wheter:[1,7],whether:[1,10],which:[2,8,10],whith:10,whitspac:10,whole:10,whom:2,whose:10,wich:2,wiewiora:[],wikipedia:10,wildcard:8,within:[8,10],without:[8,10],work:[8,10],worker:[],workernumb:[],workingcontrolfilenam:[],worst:10,would:10,wrap:[8,10],wrapper:2,write:[1,2,8,10],write_mdtraj_object_pdb:[],write_pdb_clust:[],write_xtc_to_pdb:[],writeal:[],writeallclusteringstructur:10,writeca:10,writeclusteringstructur:0,writeclustermetr:[],writeconformationnetwork:[],writeconformationnodepopul:[],writefdt:[],writemappingtodisk:[],writenewconstraint:[],writeobject:[],writeoutput:[],writepathwayoptimalclust:[],writepathwaytrajectori:[],writepdb:2,writeprecisepathtosnapshot:8,writeprocessormappingtodisk:[],writespawninginitialstructur:[],writespawningstructur:[],writestructur:[],writetopologyfil:[],writetopologyobject:[],writetrajtosnapshot:8,written:[8,10],wrong:[],wrote:8,www:10,xcol:1,xlabel:1,xtc:[8,10],xxx:[],ycol:1,year:[],yes:10,ylabel:1,you:[9,10],your:[9,10],zenodo:[],zero:[],zhao:[]},titles:["AdaptivePELE \u2013 Package Description","analysis Package","atomset Package","clustering Package","simulation Package","spawning Package","utilities Package","validator Package","Changelog","Frequently Asked Questions","User Manual","Welcome to AdaptivePELE\u2019s documentation!"],titleterms:{"default":10,"new":8,"null":10,adaptivepel:[0,10,11],adaptivesampl:0,analysi:[1,10],ask:9,atomset:2,automateroundsadapt:0,backtrackadaptivetrajectori:1,behaviour:8,block:10,bug:8,calcul:10,chang:8,changelog:8,citat:[],cluster:[3,10],clusteringtyp:3,clusteringutil:6,condit:10,constraint:10,contactmap:10,content:11,contributor:11,control:10,controlfilevalid:7,correctrmsd:1,densiti:10,densitycalcul:5,densitycalculatortyp:5,descript:0,document:11,dynam:10,equilibr:10,exampl:10,exit:10,featur:8,file:10,fix:8,foldersfirstbindingev:1,frequent:9,from:8,generalparam:10,gpu:10,hook:10,indic:11,input:10,instal:10,ligand:[],makepng:1,mantain:11,manual:10,modul:[0,1,2,3,4,5,6,7],more:10,msm:10,non:10,numberofclust:1,openmm:10,other:10,outlin:10,output:10,overview:10,packag:[0,1,2,3,4,5,6,7],paramet:10,pdb:10,pele:10,plotadapt:1,prepar:10,previou:8,procedur:10,question:9,rmsd:10,run:10,simul:[4,10],simulationrunn:4,simulationtyp:4,spawn:[5,10],spawningtyp:5,specif:10,subpackag:0,tabl:11,templet:10,thresholdcalcul:[3,10],thresholdcalculatortyp:3,trajectori:10,type:10,unreleas:8,usag:[],user:10,using:10,util:6,valid:7,version:8,welcom:11,writeclusteringstructur:1,writeprecisepathtosnapshot:[],xxx:[]}})