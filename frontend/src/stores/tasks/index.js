import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
    namespaced: true,
    getters,
    actions,
    mutations,
    state() {
        return {
            isHomePage: false,
            bc: [],
            currentTask: {},
            tasks: [
                {
                    "_id":{"$oid":"6383ccd520c8c0253f6c759c"},
                    "taskKey": "strategy",
                    "title": "Strategy",
                    "shortDescription": "How well our migration strategy is aligned?",
                    "longDescription": "Faced with an existing system that uses a coupled templating engine like <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">Smarty</span> or <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">Twig</span> how would you go about planning and executing a strategy for <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">migrating</span> the product to a <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">headless</span> frontend? Assume an existing PHP backend REST API is already available or can be extended to support it.",
                    "defaultStep": "need",
                    "tags": ["Smarty", "Twig", "migrating", "headless frontend"],
                    "homepageImage": "/home/hero-bg-strategy.jpg",
                    "steps": {
                        "need": {
                            "order": 1,
                            "stepKey": "need",
                            "title": "Understanding Problem",
                            "imageUrl": "/task1/need.png",
                            "description": "As a first step, we would evaluate the need for the migration, its underlying implications, and if we are really ready to proceed.",
                            "bc": [
                                { "text": "Home", "route": "/", "class": "" },
                                { "text": "Strategy", "route": "/strategy/need", "class": "is-active" }
                            ],
                            "nextStep": "highlevel"
                        },
                        "highlevel": {
                            "order": 2,
                            "stepKey": "highlevel",
                            "title": "Migration Journey - decoupled to headless",
                            "imageUrl": "/task1/highlevel.png",
                            "description": "Moving from monolithic/decoupled to headless would reduce technical operational risk and should also enhance flexibility, performance, customization, omnichannel experience, and future strategic growth.",
                            "nextStep": "deepdive",
                            "prefaceTitle": "Migration journey",
                            "prefaceDescription": "Either way, rest assured, these dependencies will increase with time, if we want to scale up or add new features, making this monolithic and 'decoupled' architecture more complex",
                            "bc": [
                                { "text": "Home", "route": "/", "class": "" },
                                { "text": "Strategy", "route": "/strategy/need" },
                                {
                                    "text": "Migration Journey",
                                    "route": "/strategy/highlevel",
                                    "class": "is-active"
                                }
                            ]
                        },
                        "deepdive": {
                            "order": 3,
                            "stepKey": "deepdive",
                            "title": "Building blocks - Underlying Strategy",
                            "imageUrl": "/task1/deepdive.png",
                            "description": "Strategizing a department-level migration involves contributions from all stakeholders including leadership, the product team, and the engineering team. Many decisions are part of this process, like appropriate technology, change management, impact on revenue, etc.",
                            "prefaceTitle": "Building blocks",
                            "prefaceDescription": "There are numerous action items to consider, and from my experience, I would like to classify and discuss three main categories - Foundational Elements, Continuous Development and Integration, and Long-term Vision and Planning.",
                            "bc": [
                                { "text": "Home", "route": "/", "class": "" },
                                { "text": "Strategy", "route": "/strategy/need" },
                                {
                                    "text": "Migration Journey",
                                    "route": "/strategy/highlevel",
                                    "class": "is-active"
                                },
                                {
                                    "text": "Building Blocks",
                                    "route": "/strategy/deepdive",
                                    "class": "is-active"
                                }
                            ]
                        }
                    }
                },
                {
                    "_id":{"$oid":"6383cfa120c8c0253f6c759d"},
                    "taskKey": "worksmarter",
                    "title": "Work Smarter",
                    "shortDescription": "What can help us to be more productive?",
                    "longDescription": "How can we <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">double</span> the <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">productivity</span> of our engineers (without trading job satisfaction, system availability, quality, or security)?",
                    "defaultStep": "highlevel",
                    "tags": ["double", "productivity"],
                    "homepageImage": "/home/hero-bg-about.jpg",
                    "steps": {
                        "highlevel": {
                            "order": 1,
                            "stepKey": "highlevel",
                            "title": "Missing Pieces of Productivity",
                            "imageUrl": "/task2/highlevel.png",
                            "description": "We often think about improving productivity, and whether it could be personal productivity or an organization's, it has the potential to exponentially improve well-being, sense of purpose, sustainability, and engagement.",
                            "bc": [
                                { "text": "Home", "route": "/", "class": "" },
                                { "text": "Work Smarter", "route": "/worksmarter/highlevel", "class": "is-active" }
                            ]
                        }
                    }
                },
                {
                    "_id":{"$oid":"6383cfc620c8c0253f6c759e"},
                    "taskKey": "architecture",
                    "title": "Architecture",
                    "shortDescription": "Do you want to know more about this website?",
                    "longDescription": "Let's have a sneak peek on the high-level <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">architecture</span> of the website, and would really appreciate your <span class=\"tag is-size-5 has-background-link-light has-text-weight-semibold\">feedback</span> and queries!",
                    "defaultStep": "highlevel",
                    "tags": ["double", "productivity"],
                    "homepageImage": "/home/hero-bg-worksmarter.jpg",
                    "steps": {
                        "highlevel": {
                            "order": 1,
                            "stepKey": "highlevel",
                            "title": "Core Building blocks",
                            "imageUrl": "/about/about-new.png",
                            "description": "This website is hosted on Azure Static Web, empowered by Vue.js, Bulma CSS on front-end; node.js and expressjs as middle tier; and MongoDB as data store + data api + cognitive search for future scalability options.",
                            "bc": [
                                { "text": "Home", "route": "/", "class": "" },
                                { "text": "Architecture", "route": "/architecture/highlevel", "class": "is-active" }
                            ]
                        }
                    }
                }
            ]
        }
    }
}