---
title: Neural_Network
date: 2024-01-07 12:25:14
tags: ['Python','Study','AI','Machine learning']
categories: Notes
index_img: https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20240113/image.5zu3ucp2rps0.webp
cover: https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20240113/image.5zu3ucp2rps0.webp
description:
---
## Perceptons(感知机)
![感知机](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20240113/image.5zu3ucp2rps0.webp)
input is 0 or 1, output is 0 or 1.
+  threshold value(阈值)
+  weights(权重)
+  bias(偏置) : measure of how easy it is to get the perceptron to output a 1

## Activation Function
### sigmoid neuron.
![sigmoid neuron](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/image.3llmv69lqrg0.webp)

![sigmoid Function](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20240116/image.6yxhxx2f9240.webp)
Just like a perceptron, the sigmoid neuron has inputs, x1,x2,…
. But instead of being just 0
 or 1
, these inputs can also take on any values between 0
 and 1
. So, for instance, 0.638…
 is a valid input for a sigmoid neuron.
Output is between 0 and 1.  


$$
\begin{eqnarray}
  \sigma(z) \equiv \frac{1}{1+e^{-z}}.
\end{eqnarray}
$$

### Tanh 

![image](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20240207/image.5r43s5wz8s40.webp)
  
$$
\tanh (x)=\frac{2}{1+e^{-2 x}}-1
$$

### ReLU  

![image](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20240207/image.mrfmsjw1jy8.webp)

$$  
\begin{eqnarray}
  \text{ReLU}(x) \equiv \max(0, x)
\end{eqnarray}
$$  

# COEN 6331  

<iframe src="https://nbviewer.org/github/waterkingest/NeuralNetworkStudy/blob/main/NeuralNetwork.ipynb" width="900" height="2000" ></iframe>