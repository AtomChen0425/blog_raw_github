---
title: M. Omair Ahmad's artical(2)
date: 2022-04-24 21:10:53
tags: ['Study','Essay']
categories: Notes
math: true
excerpt: A Deep Light-Weight Image Super Resolution Network Using Multi-Scale Spatial and Morphological Feature Generating Residual Blocks
description: A Deep Light-Weight Image Super Resolution Network Using Multi-Scale Spatial and Morphological Feature Generating Residual Blocks
---
# A Deep Light-Weight Image Super Resolution Network Using Multi-Scale Spatial and Morphological Feature Generating Residual Blocks
## Introduction
In this artical, the scholars mention a novel residual block with a capability of producing features corresponding to the textures and structures of high quality images by introducion in it the morphological operations of erosion, dilation, opening and closing is proposed and used in a residual convolutional network for the task of image super resolution.(他们提出了新型的残差结构，引入了侵蚀，扩张，打开和关闭等形态学操作来产生与高分辨率图像的纹理和结构相对应的特征，同时用于提升图像分辨率任务的残差卷积神经网络)

## Previous research
Include **deep light-weight image super resolution neural networks**, **deep image super resolution networks using edge and gradient information** and **image super resolution schemes using morphological information**.
### DRRN
This is a super resolution convolutional neural network employing a residual block of two convolutional layers, which is used recurisively(被递归调用). This method reduces the number of parameters.(运行要的参数减少了)However, since this network uses a large number of recursions in order to increase its depth virtually and provide a high super resolution performance, the number of operations required by it is very large.(操作增加了) Which prohibits the deployment of DRRN in applications requiring low-power consumption and high-=execution speed.（没办法实现低功耗，高速度）
### CARN
This is an example of a high performance deep convolutional neural network that employs small numbers of parameters and operations to provide high quality super resolved images.(使用少量的参数和操作来实现高质量的超分辨率影像)The lightness of this network in terms of numbers of parameters and operations can be attributed mainly to the use of group convolutions, even though they result in lowering its performance.(使用群组卷积（group convolutions)可以减少参数和操作数，但是会降低性能。)

......

## Proposed image super resolution scheme.
They develop the proposed residual block, and then present the architecture of the super resolution network employing this block.  

### Proposed residual block
This block consists of three modules, a multi-scale spatial feature generation module, a morphological feature generation module, and a feature fusion module. (3个模块：多尺度空间特征生成模块，形态学特征生成模块和特征融合模块)The input feature tensor x is simultaneously fed to the two feature generation modules.（输入的特征张量x同时被送入两个特征生成模块） In the multi-scale spatial featuregeneration module, the feature tensor x undergoes the operations of convolution and dilated convolution in parallel producing（在多尺度空间特征生成模块中， 特征张量x通过卷积和扩张卷积的并行操作）, respectively, the feature tensors u1 and u2, as given by
$$
u1=W_1(x)
$$
$$
u2=W_2(X)
$$
Both convolution operation $W_1$ and the dilated convolution operation $W_2$ employ 32 filters each with kernel size 3*3 and the dilation rate in $W_2$ is 2. Thus, the feature tensors $u_1$ and $u_2$ are obtained at two different scales. They add the feature tensor $u_1$ which is free of gridding artifacts, to the feature tensor $u_2$ producing the feature tensor $u_3$, and this operation can diminish the effect of artifacts(伪影). The feature tensors $u_1$ and $u_3$