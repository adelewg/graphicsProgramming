# graphicsProgramming
Exercises in graphical programming using javascript

**Vectors**.     
Vectors will help us to keep the code tidy and neat.   
A vector is like a set of instructions to get from one point to another.   
A vector has both direction and magnitude.    
.add()      
.sub().   
.mult().   
.div().   
There is also another technique called static addition where you can add two vectos together without changing them. An example of this would be: v3 = p5.Vector.add( v1, v2 )     
v1 and v2 remain unchanged and we store the result of the addition in a new vector called v3.

**Physics Engine**      
We shall use matter.js as the physics engine.   

**Generative Art and Design**      
Most computer generated random numbers are pseudorandom numbers generated using a starting "seed" value.
Random numbers are not really random - they are pseudo random as they are generated using the "seed" value and an algorithm. Random numbers are generated from seed values that are typically to do with time.
There is a randomSeed() function in p5.js and an example of this would be randomSeed(0) or it could be randomSeed(50) that you could put in the setup function. This is useful if you want to generate random numbers but you want to generate the SAME random numbers all the time. randomSeed() allows you to generate the same pseudorancom numbers every time you run the code.    
*Perlin Noise*       
It is another way to generate random numbers that are more realistic for certain situations. It was initially developed by a computer scientist called Ken Perlin.
Its referred to as noise which is different from randomness.       
noise()    
noise is from 0 to 1 and thats why we have to map it to an appropriate range.
noiseSeed()
Perlin noise allows for a more organic appearance as it produces a naturally ordered sequence of pseudorandom numbers. Random doesn’t care about it’s history, it is like throwing the dice every time.

2D Noise     
We pass two parameters to the noise function





