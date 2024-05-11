---
title: Breadth-First Search(BFS)
date: 2024-01-03 15:11:55
tags: ['Python','Study','algorithm','Medium']
categories: Leetcode
index_img:
cover: 
description: It is a graph search algorithm that starts from a given node and explores the graph by expanding the nodes at the current depth before moving on to the next depth. BFS is useful for solving problems such as finding the shortest path between two nodes, determining the order in which nodes should be processed, and identifying cycles in a graph.
---

# Intruction
BFS stands for Breadth-First Search, which is a graph search algorithm that starts from a given node and explores the graph by expanding the nodes at the current depth before moving on to the next depth. BFS explores the graph branch by branch, trying to find the target node as quickly as possible.

The main advantage of BFS is that the shortest path to the target node is found when the target node is first visited. This is because BFS guarantees that all paths to the target node have been explored by the time it is first visited.

BFS is typically implemented using a queue, where each iteration of the algorithm consists of removing a node from the queue and adding its unvisited neighbors to the queue. This process continues until the target node is found or the queue is empty.

BFS is useful for solving problems such as finding the shortest path between two nodes, determining the order in which nodes should be processed, and identifying cycles in a graph.

## Example:

### 542. 01 Matrix

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

![example1](https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg)

> Input: mat = [[0,0,0],[0,1,0],[0,0,0]]  
> Output: [[0,0,0],[0,1,0],[0,0,0]]  

![example2](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg)

> Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
> Output: [[0,0,0],[0,1,0],[1,2,1]]

#### Solution

```python
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        if not mat or not mat[0]:
            return []

        m, n = len(mat), len(mat[0])
        queue = []
        MAX_VALUE = m * n
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    queue.append((i, j)) #Start from '0' to find '1'
                else:
                    mat[i][j] = MAX_VALUE
        
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        
        while queue:
            row, col = queue.pop(0)
            for dr, dc in directions:
                r_temp, c_temp = row + dr, col + dc
                if 0 <= r_temp < m and 0 <= c_temp < n and mat[r_temp][c_temp] > mat[row][col] + 1:
                    queue.append((r_temp, c_temp))
                    mat[r_temp][c_temp] = mat[row][col] + 1  # each cell already restore the length of path to '0'  
        return mat

```