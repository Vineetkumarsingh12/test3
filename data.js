const quizData = [
    {
        "question": "What is reinforcement learning?",
        "options": {
            "A": "A type of machine learning where algorithms learn from labeled data",
            "B": "A type of machine learning where algorithms learn from reward-based feedback",
            "C": "A type of machine learning where algorithms learn from both labeled and unlabeled data",
            "D": "A type of machine learning used only for image recognition"
        },
        "correctAnswer": "B"
    },
    {
        "question": "What is the agent in reinforcement learning?",
        "options": {
            "A": "The human user providing instructions",
            "B": "The environment with which the learning agent interacts",
            "C": "The machine learning model",
            "D": "The reward signal"
        },
        "correctAnswer": "C"
    },
    // ... (more questions here)
    {
        "question": "What is the concept of exploitation in reinforcement learning?",
        "options": {
            "A": "Choosing actions randomly without considering rewards",
            "B": "Choosing actions that the agent already knows",
            "C": "Choosing actions that the agent is uncertain about to gather more information",
            "D": "Choosing actions with the highest immediate reward"
        },
        "correctAnswer": "B"
    }
];

module.exports = quizData;
