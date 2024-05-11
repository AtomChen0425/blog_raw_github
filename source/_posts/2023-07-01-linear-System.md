---
title: 'linear System'
date: 2023-07-01 10:08:16
tags: ['Study','Linear System']
categories: Notes
hide: true
---
# Conclusion
<div>
  <iframe src="/pdfjs/web/viewer.html?file=/pdf/Conclusion.pdf" width="100%" height="500px" frameborder="0"></iframe>
</div>
## Introduction to Design of System

  + Performance Specification(性能规范)

### Time domain and Frequency domain

{% iframe "//player.bilibili.com/player.html?aid=763994121&bvid=BV1zr4y1C7Pv&cid=434388964&page=1" 100% 300px %}
### **Fourier Transform**

$$
\begin{array}{c}
X_{k}=\sum_{n=0}^{N-1} x_{n} \cdot e^{-i 2 \pi k n / N} \\
\\
x_{n}=\frac{1}{N} \sum_{k=0}^{N-1} X_{k} \cdot e^{i 2 \pi k n / N}
\end{array}
$$


