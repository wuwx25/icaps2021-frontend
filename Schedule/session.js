var app = new Vue({
	el: '#app',
	data:{
		sessionNum:'',
		session:{
			Session1:{
				139:'Dantzig-Wolfe Decomposition for Cost Partitioning',
				153:'Exploiting Cyclic Dependencies in Landmark Heuristics',
				230:'Subset-Saturated Transition Cost Partitioning',
				287:'Online Saturated Cost Partitioning for Classical Planning'
			},
			Session2:{
				151:'On the Compilability and Expressive Power of State-Dependent Action Costs',
				152:'Learning Heuristic Selection with Dynamic Algorithm Configuration',
				282:'Automatic Instance Generation for Classical Planning',
				368:'Computational Complexity of Computing Symmetries in Finite-Domain Planning'
			},
			Session3:{
				36:'Iterative-deepening Bidirectional Heuristic Search with Restricted Memory',
				128:'Delete-Relaxation Heuristics for Lifted Classical Planning',
				146:'Endomorphisms of Lifted Planning Problems',
				322:'Hierarchical Width-Based Planning and Learning'
			},
			Session4:{
				17:'Approximate bi-criteria search by efficient representation of subsets of the Pareto-optimal frontier',
				61:'Conflict-Free Multi-Agent Meeting',
				99:'OMCoRP: An Online Mechanism for Competitive Robot Prioritization',
				366:'Safe Multi-Agent Pathfinding with Time Uncertainty'
			},
			Session5:{
				191:'A Competitive Analysis of Online Multi-Agent Path Finding',
				345:'Conflict-Based Increasing Cost Search',
				353:'Speeding Up Search-Based Motion Planning using Expansion Delay Heuristics',
				165:'Scalable Rail Planning and Replanning: Winning the 2020 Flatland Challenge'
			},
			Session6:{
				34:'Jump Point Search with Temporal Obstacles',
				123:'Width-Based Backward Search',
				140:'The Consistent Case in Bidirectional Search and a Bucket-to-Bucket Algorithm as a Middle Ground between Front-to-End and Front-to-Front',
				206:'Contracting and Compressing Shortest Path Databases'
			},
			Session7:{
				67:'E2Coop: Energy Efficient and Cooperative Obstacle Detection and Avoidance for UAV Swarms',
				84:'Hierarchical Freespace Planning for Navigation in Unfamiliar Worlds',
				187:'Approximate Novelty Search',
				297:'S*: A Heuristic Information-Based Approximation Framework for Multi-Goal Path Finding'
			},
			Session8:{
				145:'Predicted Composite Signed-Distance Fields for Real-Time Motion Planning in Dynamic Environments',
				209:'Towards Time-Optimal Any-Angle Path Planning With Dynamic Obstacles',
				222:'Improving AlphaZero Using Monte-Carlo Graph Search',
				363:'Attributed Transition-based Domain Control Knowledge for Domain-Independent Planning'
			},
			Session9:{
				4:'Task-Aware Waypoint Sampling for Robotic Planning',
				76:'Verifying Plans and Scripts for Robotics Tasks Using Performance Level Profiles',
				261:'In-Station Train Dispatching: A PDDL+ Planning Approach',
				309:'Non-Deterministic Conformant Planning Using a Counterexample-Guided Incremental Compilation to Classical Planning'
			},
			Session10:{
				132:'Flexible FOND Planning with Explicit Fairness Assumptions',
				134:'Pattern Databases for Goal-Probability Maximization in Probabilistic Planning',
				274:'Rule-based shielding for Partially Observable Monte-Carlo Planning',
				370:'Selecting goals in oversubscription planning using relaxed plans'
			},
			Session11:{
				147:'Data-Driven Decision-Theoretic Planning using Recurrent Sum-Product-Max Networks',
				305:'Multiple Plans are Better than One: Diverse Stochastic Planning'
			},
			Session12:{
				79:'Robust Opponent Modeling via Adversarial Ensemble Reinforcement Learning',
				201:'Learning and Exploiting Shaped Reward Models for Large Scale Multiagent RL',
				208:'Integrating Knowledge Compilation with Reinforcement Learning for Routes',
				180:'DeepFreight: A Model-free Deep-reinforcement-learning-based Algorithm for Multi-transfer Freight Delivery'
			},
			Session13:{
				86:'Guiding Robot Exploration in Reinforcement Learning via Automated Planning',
				190:'A Simulator-based Planning Framework for Optimizing Autonomous Greenhouse Control Strategy',
				354:'A Deep Ensemble Method for Multi-Agent Reinforcement Learning: A Case Study on Air Traffic Control',
				360:'Constrained Multiagent Markov Decision Processes: a Taxonomy of Problems and Algorithms'
			},
			Session14:{
				24:'Situated Temporal Planning Using Deadline-aware Metareasoning',
				144:'Abstraction-Guided Policy Recovery from Expert Demonstrations',
				215:'Translations from Discretised PDDL+ to Numeric Planning',
				273:'Meta Reinforcement Learning for Heuristic Planing'
			},
			Session15:{
				55:'RePReL: Integrating Relational Planning and Reinforcement Learning for Effective Abstraction',
				120:'LM-cut and Operator Counting Heuristics for Optimal Numeric Planning with Simple Conditions',
				257:'Privacy-Preserving Algorithm for Decoupling of Multi-Agent Plans with Uncertainty',
				312:'Blind Decision Making: Reinforcement Learning with Delayed Observations'
			},
			Session16:{
				300:'Automated Production Scheduling for Artificial Teeth Manufacturing',
				325:'Scheduling with Complete Multipartite Incompatibility Graph on Parallel Machines',
				328:'Total Completion Time Minimization for Scheduling with Incompatibility Cliques',
				361:'Constraint-based Scheduling for Paint Shops in the Automotive Supply Industry'
			},
			Session17:{
				54:'Distributed Fair Scheduling for Information Exchange in Multi-Agent Systems',
				62:'Online Hedge Reservation for Diverse Plans and Competitive Analysis',
				109:'Scheduling Stochastic Jobs - Complexity and Approximation Algorithms',
				238:'GRAND-VISION: An Intelligent System for Optimized Deployment Scheduling of Law Enforcement Agents'
			},
			Session18:{
				48:'Explaining path plan optimality: fast explanation methods for navigation meshes using full and incremental inverse optimization',
				60:'Compositional Approach to Translate LTLf/LDLf into Deterministic Finite Automata',
				219:'On Planning with Qualitative State-Trajectory Constraints in PDDL3 by Compiling them Away',
				306:'vPlanSim: An Open Source Graphical Interface for the Visualisation and Simulation of AI Systems'
			},
			Session19:{
				5:'Block Compression and Invariant Pruning for SAT-based Totally-Ordered HTN Planning',
				38:'Translating Totally Ordered HTN Planning Problems to Classical Planning Problems Using Regular Approximation of Context-Free Languages',
				44:'Fully Observable Nondeterministic HTN Planning -- Formalisation and Complexity Results',
				49:'Loop Detection in the PANDA Planning System'
			},
			Session20:{
				118:'Autonomous Building of Structures in Unstructured Environments via AI Planning',
				130:'Knowledge Compilation for Nondeterministic Action Languages',
				264:'Generalized Planning as Heuristic Search',
				362:'What do you really want to do? Towards a Theory of Intentions for Human-Robot Collaboration'
			},
			Session21:{
				37:'A Closer Look at Causal Links: Complexity Results for Delete-Relaxation in Partial Order Causal Link (POCL) Planning',
				143:'Decentralized Refinement Planning and Acting',
				163:'Automated design of fMRI paradigms',
				364:'Landmark-based approaches for goal recognition as planning'
			},
			Session22:{
				85:'Temporal Reasoning with Kinodynamic Networks',
				339:'PLGRIM: Hierarchical Value Learning for Large-scale Exploration in Unknown Environments',
				365:'Self-Reliant Rovers for Increased Mission Productivity'
			},
			Session23:{
				338:'Computing Opportunities to Augment Plans for Novel Replanning during Execution',
				367:'Adaptive Smoothing for Path Integral Control'
			}	
		},
		sum:0,
		oldTime: new Date,
		channelId:367
	},
	methods:{
		setId:function(id){
			localStorage.setItem("channel",id);
			// console.log(id)
		}
	},
	mounted(){
		this.sessionNum = decodeURI(window.location.href).split('=')[1];
		// setInterval(function(){
		// 	axios.post(backendBaseUrl+'/api/users/forgotemailverify',this.user)
		// },60000)
	}
})