# Memory Bank (TODO: Sollte angepasst werden, da es in diesem Workshop nicht zum Einsatz kommt)

The memory bank used in this project is based on the concepts of the [cline memory bank](https://docs.cline.bot/prompting/cline-memory-bank). The idea is to keep track of the projects state, history and overall progress. 

Rewrite, is this still true?
While any form of a structured road map will increase the quality and speed of the agent, it is still not as optimized as it could be. This is simple a dumped down example of how a memory bank could be used. While working on this 
workshop I came across a [custom memory bank](https://github.com/vanzan01/cursor-memory-bank) that looks very sophisticated - which is either totally over the top or might be the right thing for a complex project - but wasn't able to try it yet. 

## Additional Thoughts

### Ticketing

One interesting comment I read in a reddit post, was the idea to use tickets to guide the agent to implement features, fix bugs, etc. If we humans use it, why not use it to guide the actions of the agent. 

Here the first iteration of how a ticketing workflow might look like:

1. Human creates ticket inside the tickets folder and fills it with context.
2. Human asks the agent the specifications in the ticket are good enough for the agent to know what to do. 
    - This should be an iterative process, till the ticket is refined to the liking of the agent and human. 
    - I would recommend to use a repeating ticket layout.
3. The ticket will be annotated with in progress and added to the list of active tickets inside `active.md`
4. Each ticket should have links to tickets that are relevant to the current ticket, even if it is a ticket that is already done. With an additional rule for the agent only to consider ticket that are active or linked by active tickets, 
we reduce the context and can keep finished tickets for documentation purposes
5. After the tickets completion, remove it from the active list and mark it with done. 