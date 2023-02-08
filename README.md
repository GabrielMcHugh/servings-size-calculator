# servings-size-calculator

**Why**: I needed something to measure out my supplements before I premixed a batch

A conversion calculator for servings sizes, where you input the measurement and whatever measuring tools you have at hand and it will let you know what the most efficient combination of servings with them are to give the equivalent measurement

### Basic Wireframe
![image](https://user-images.githubusercontent.com/58574404/205774665-33d75532-0e3c-4f2d-87cb-769ab4de5ac2.png)

## To do
[] Fix tool-list-filter pipe. Its currently not filtering anything because it just returns true for all tools[key]===true condition. Fix.
[] Have both the measure-input and measure-tools-list instantiate their tools list from the same source. (Service? State Management? Others?)
[] Create unit tests for the tool-list-filter pipe