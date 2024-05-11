---
title: Kharma's paper (1)
date: 2022-04-11 09:08:52
tags: ['Study','Essay']
categories: Notes
math: true
excerpt: A Hybrid Evolutionary Algorithm, Utilizing Novelty Search and Local Optimization, Used to Design Convolutional Neural Networks for Handwritten Digit Recognition
description: A Hybrid Evolutionary Algorithm, Utilizing Novelty Search and Local Optimization, Used to Design Convolutional Neural Networks for Handwritten Digit Recognition
---
# A Hybrid Evolutionary Algorithm, Utilizing Novelty Search and Local Optimization, Used to Design Convolutional Neural Networks for Handwritten Digit Recognition

## Abstract

These scholoars investigate the design of CNNs using **[Cartesian Genetic programing(CGP)](https://blog.csdn.net/qq_44186838/article/details/109197192)**, an EA variant. And use **Simulate Annealing** to local optimize each optima. And this strategy can help to reduce lots of computational effort.

## Details

They use threestage evolutionary optimization approach. First stage aims to generate a diverse initial generation of CNNs( using the Novelty Search alogrithm). The second stage involves the evolution of CNN architectures (using the Catesian Genetic Programming). Third stage, they selects the most diverse generation from the previous stage. Finally use the stochastic local search(SLS) algorithm to exploit the local neighbourhoods.

### Methods

They evolve two separate populations of CNNs. The first population is begininng with a randomly generated initial generation. The second population yields the initial generation for the evolutionary algorithm. Each designed of their networs combine two subnetwors: a fuly convolution neural network followed by a fully connected(dense) network.

### Genetic Encoding
![table1](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220411/table1.5m8u6sb1asc0.webp)
Fellowing the Table1 to design Sub-Network F: number of filters(output channels) K: Knerel size N: number of units in a dense layer

![figure1](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220411/figure1.55v4ye4nkrw0.webp)
The network structure we can see from this figure.

![vector-image](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220411/vector-image.vwegw63tgog.webp)
Phenotype of the best performing CNN architecture obtained by the proposed method, with the vector representation of each layer indicated. The figure illustrates the functions of each of the modules represented in the genotype illustrated in Figure 1. The coloured arrows indicate the various functions: DeconvBlock (green), ConvBlock (blue), ResBlock (cyan), DenseBlock (dark gray), Concatenation (white), and Average Pooling (red).
![F1score](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220411/F1score.71l7dhskwz80.webp)

They mention the novelty score to represent the effect of the algorithm.
![novelty_score](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220411/novelty_score.8rhten8x95g.webp)

### Local Optimization

The whole algorithm base on the F1 score and novelty score to select the individuals which are determined to be located near or at local optima.

Thus every architecture has an evalution metric and a bovelty metric, the sampling of local optima can be treated as a multi-objective optimization problem. Then they use the [NSGA-2](https://zhuanlan.zhihu.com/p/430976806) algorithm to reduce the time-complexity or/ and improved the convergence to the true Pareto Optimal front.

Then the solution found by NSGA-2 will be fed into a local search optimizer. They chose [Simulated annealing](https://blog.csdn.net/qq_44186838/article/details/109270349)(which can help to skip some local optima) as the local optimization algorithm.

### Experimental Setting

They split MNIST data-set into a training set of 50000 images and held-out validation set of 10000 images. Image pixel values are normalized by dividing each value by 255.

## Result

![each-population-result](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220411/each-population-result.3777z8no7uo0.webp)
1. Population1: the population obtained using the standard evolutionary algorithm
2. Population 2: the population obtained using the evolutionary alogrithm with Novelty search initialization.
3. Population 3: the population obtained from the standard evolutionary algorithm and subsequent local optimization via Simulated Annealing.
4. Population 4: the population obtained from the evolutionary algorithm with Novelty Search initialization and subsequent local optimization via Simulated Annealing.

## Conclusions
Scholars investigated the use of a three-stage CGP-based hybrid evolutionary algorithm(EA) for the training of CNNs. They demostrat how the final stage of the proposed methodology (**simulated annealing**) is able to optimize the potential locally optimal individuals found in previous stages, and do so more efficiently than a nor-hybridized EA. And use the **novelty** as an objective has the effect of **reducing the variance of recognition errors by an order of magnitude** compared to the pure evolutionary approach.