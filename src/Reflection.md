- Benefits of pure functions: 

They are predictable, testable, and reusable. They help maintain cleaner code with fewer side effects.


- How does immutability prevent bugs: 

By not modifying the original data, we avoid unintended side effects, making it easier to debug and maintain.


- compose() vs pipe(): 

compose applies functions right to left (like math), pipe is left to right (like reading). I prefer pipe for readability in transformation chains.


- Struggles in functional purity: 

The sqlJoin function required merging data — care was taken to avoid mutation by using spread syntax.
