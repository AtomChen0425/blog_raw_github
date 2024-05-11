---
title: Slide Window Approach
date: 2024-02-03 21:28:39
tags: ['Python','Study','algorithm','Hard']
categories: Leetcode
index_img: https://media.geeksforgeeks.org/wp-content/uploads/20220408153501/WindowSlidingTechniquedrawio2-660x423.jpg
cover: https://media.geeksforgeeks.org/wp-content/uploads/20220408153501/WindowSlidingTechniquedrawio2-660x423.jpg
description:  Sliding window approach is especially valuable in scenarios where you need to process or analyze data in a sequential and contiguous manner. It can lead to more efficient algorithms compared to naive approaches that process the entire dataset repeatedly.
---

# Intruction

The Sliding Window algorithm is a method for finding a subset of elements that satisfy a certain condition in issues.

![Slide_Window](https://miro.medium.com/v2/resize:fit:720/format:webp/1*m1WP0k9cHRkcTixpfayOdA.gif)

The Sliding Window Algorithm is a specific technique used in computer science and programming to efficiently solve problems that involve arrays, strings, or other data structures by maintaining a “window” of elements within a certain range and moving that window through the data to perform operations or calculations.

## Example:

### 76. Minimum Window Substring

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

+ Example 1:

    > Input: s = "ADOBECODEBANC", t = "ABC"  
    > Output: "BANC"  
    > Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.  

+ Example 2:

    > Input: s = "a", t = "a"  
    > Output: "a"  
    > Explanation: The entire string s is the minimum window.  

+ Example 3:

    > Input: s = "a", t = "aa"  
    > Output: ""  
    > Explanation: Both 'a's from t must be included in the window.  
    > Since the largest window of s only has one 'a', return empty string.  

#### Solution

```python

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        m,n=len(s),len(t)
        mp = defaultdict(int)  #Used to store the number of characters in t

        ans = float('inf')
        start = 0

        for x in t:
            mp[x]+=1 #Increase the count of each character in t

        count = len(mp)

        i = 0
        j = 0

        while j < len(s):
            mp[s[j]]-=1 #decrease the count of each character in s
            if mp[s[j]] == 0:   #means one kind of characters in t is included in the window
                count -= 1      

            if count == 0:  #Means the window already contain all the characters in t
                while count == 0:
                    if ans > j - i + 1: # check the smallest window
                        ans = j - i + 1  
                        start = i
                    mp[s[i]] +=1 
                    if mp[s[i]] > 0:     #calculate the next window
                        count += 1

                    i += 1
            j+=1
        if ans != float('inf'):
            return s[start:start + ans]
        else:
            return ""


```