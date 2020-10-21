---
title: "Learning interaction dynamics with an interactive LSTM for conversational sentiment analysis"
collection: publications

excerpt: 'we propose an interactive long short-term memory (LSTM) network for conversational sentiment analysis to model interactions between speakers in a conversation by (1) adding a confidence gate before each LSTM hidden unit to estimate the credibility of the previous speakers and (2) combining the output gate with the learned influence scores to incorporate the influences of the previous speakers.' 
date: 2020-09-21
venue: 'Neural Networks'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S0893608020303567#!'
citation: ' Y. Zhang, P. Tiwari, D. Song et al., Learning interaction dynamics withan interactive LSTM for conversational sentiment analysis.Neural Networks(2020), doi:https://doi.org/10.1016/j.neunet.2020.10.001.'
---
Conversational sentiment analysis is an emerging, yet challenging subtask of the sentiment analysis problem. It aims to discover the affective state and sentimental change in each person in a conversation based on their opinions. There exists a wealth of interaction information that affects speaker sentiment in conversations. However, existing sentiment analysis approaches are insufficient in dealing with this subtask due to two primary reasons: the lack of benchmark conversational sentiment datasets and the inability to model interactions between individuals. To address these issues, in this paper, we first present a new conversational dataset that we created and made publicly available, named ScenarioSA, to support the development of conversational sentiment analysis models. Then, we investigate how interaction dynamics are associated with conversations and study the multidimensional nature of interactions, which is understandability, credibility and influence. Finally, we propose an interactive long short-term memory (LSTM) network for conversational sentiment analysis to model interactions between speakers in a conversation by (1) adding a confidence gate before each LSTM hidden unit to estimate the credibility of the previous speakers and (2) combining the output gate with the learned influence scores to incorporate the influences of the previous speakers. Extensive experiments are conducted on ScenarioSA and IEMOCAP, and the results show that our model outperforms a wide range of strong baselines and achieves competitive results with the state-of-art approaches.

[Download paper here](https://github.com/prayagtiwari/prayagtiwari.github.io/tree/master/files/InteractiveLSTM.pdf)

Recommended citation:  Y. Zhang, P. Tiwari, D. Song et al., Learning interaction dynamics withan interactive LSTM for conversational sentiment analysis.Neural Networks(2020), doi:https://doi.org/10.1016/j.neunet.2020.10.001.
.
