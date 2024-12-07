---
title: machine learning
date: 2024-11-20 21:33:11
tags: ['Study','Machine learning']
categories: Notes
index_img:
cover:
description: Notes about machine learning
---
# parametric models and nonparametric models

## **Strengths of Parametric Modeling**: 
- Parametric models are **suitable** for scenarios where there is **already** an explicit **relationship** between the input variables and the predicted target.
- These models require some **prior knowledge** of the problem and are **suitable** for simple, low-dimensional datasets.

## **Flexibility of non-parametric models**: 
- Non-parametric machine learning algorithms are able to automatically discover complex trends and structures in data.
- They do not require an explicitly specified model and can learn data distributions without a priori assumptions.
- These models are suitable for high-dimensional, complex real-world datasets and can achieve high accuracy rates.

## **Examples of non-parametric models**: 
- Common non-parametric models include: 
- **K-Nearest Neighbors (KNN)**. 
- **Support Vector Machines, SVM** 
- **Decision Trees (DT)**. 
- **Ensemble Methods** such as Random Forests and Gradient Boosting Trees.

## **Parametric vs. non-parametric models**: 
- **Parametric models**:
- Have a fixed number of parameters, e.g., linear regression and logistic regression.
- Stronger dependence on model assumptions (e.g., data are linearly separable).
- Advantage is computationally efficient and suitable for small data sets or clear theoretical models.
- **Non-parametric models**:
- The number of parameters is not fixed and can be adjusted with data complexity.
- More suitable for dealing with nonlinear relationships and complex distributions.
- Disadvantages are high computational complexity and may require a larger amount of training data.

## **Advantages of non-parametric models**: 
- Automatic pattern discovery: no need to artificially define data distributions or assumptions, the model can adapt itself to the data.
- Expressive: Captures complex relationships between high-dimensional features.
- Strong elasticity: well adapted to a wide range of data types, including classification, regression and sorting problems.

## **Typical application scenarios**:
- **KNN**: suitable for classification problems, such as recommendation system, image recognition.
- **SVM**: Handles high-dimensional spatial classification tasks, e.g., text categorization, bioinformatics.
- **Decision trees and integration methods**: widely used in regression, classification and anomaly detection tasks

# Challenges in Machine Learning