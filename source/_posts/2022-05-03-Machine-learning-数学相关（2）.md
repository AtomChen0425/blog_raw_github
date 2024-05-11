---
title: Machine learning--数学相关（2）
date: 2022-05-03 10:08:02
tags: ['Study','Machine learning','Linear algebra']
categories: Notes
---
# Vector Spaces(向量空间)
## Groups（群）
Consider a set $\mathcal{G}$ and an operation $\otimes: \mathcal{G} \times \mathcal{G} \rightarrow \mathcal{G}$ defined on $\mathcal{G}$. Then $G:=(\mathcal{G}, \otimes)$ is called a group if the following hold:  
1. Closure of $\mathcal{G}$ under $\otimes: \forall x, y \in \mathcal{G}: x \otimes y \in \mathcal{G}$  
2. Associativity: $\forall x, y, z \in \mathcal{G}:(x \otimes y) \otimes z=x \otimes(y \otimes z)$  
3. Neutral element: $\exists e \in \mathcal{G} \forall x \in \mathcal{G}: x \otimes e=x$ and $e \otimes x=x$  
4. Inverse element: $\forall x \in \mathcal{G} \exists y \in \mathcal{G}: x \otimes y=e$ and $y \otimes x=e$, where $e$ is the neutral element. We often write $x^{-1}$ to denote the inverse element of $x$.  