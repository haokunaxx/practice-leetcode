# 回溯算法

## 概念
本质上是深度优先搜索算法（DFS Deep First Search）。之所以叫回溯是因为在搜索解的时候会采用尝试和回退的策略。


## 通用算法框架

```typescript

function backTracking(state, choices, res){
  // 判断是否是解
  if(isSolution(state)){
    // 记录当前解
    recordSolution(state)
    // 停止
    return;
  }
  // 遍历所有选择
  for(const choice of choices){
    // 剪枝：判断选择是否合法
    if(isValid(choice)){
      // 尝试：做出选择，更新状态
      makeChoice(state, choice)
      // 递归
      backTracking(state, [choice.left, choice.right], res)
      // 回退：撤销选择，恢复到之前的状态
      undoChoice(state, choice)
    }
  }
}

```

## 示例

  在二叉树中搜索值为 7 的节点，记录根节点到这些节点的路径，并且路径中不能出现值为 3 的节点

```typescript

```