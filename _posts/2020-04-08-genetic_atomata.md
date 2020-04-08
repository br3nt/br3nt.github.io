---
title: "Genetic Automata and Higher-Order Computation"
---

**Draft**

In theory, DNA and RNA have some equivalence to certain concepts in computational theory.
The genetic letters represent an alphabet, the proteins represent the strings of the genetic language.

There is some equivalency, but there are also differences.

The similarity is that genetic code can be thought of as equivalent to the tape that is used in pushdown automata and Turing machines.

Where genetic code can only be read in one direction, pushdown automata and Turing machines can travel back and forward along the tape.

Pushdown automata also have access to a stack of memory that can be accessed.
Turing machines don't contain a stack, but can instead rewrite the tape.

To my knowledge, DNA does not have these features.  DNA and RNA are read in a single direction, code can't e replaced, and there is no stack to store memory.

However, the strings that DNA and RNA produce, proteins, have properties that computational strings do not have.
These are real-world physical properties such as shape, charge, and function.

The language of genetics, all the proteins that can be built from DNA and RNA, can interact with the real world.
Individually, proteins have specific properties and functions.
But proteins can also and do combine with other proteins in specific ways to form larger structures that also have functions.

Let's give this property an equivalent name, a protein is more than a string, it's a functional string.
Functional strings are composable into larger functional strings.

Based on this premise, we should now be able to elicit some form of higher-order computational theory based on functional strings.

# What ifs

## What if DNA and RNA could be read backwards and forwards, and rewritten?

The alphabet of DNA and RNA traditionally contained only 4 members: adenine (A), cytosine (C), guanine (G), or thymine (T).
This creates two base-pairs: A-T and G-C.

A paper published in 2017 in Nature, [A semi-synthetic organism that stores and retrieves increased genetic information](https://www.nature.com/articles/nature24659), indicates that a group of scientists has managed to extend the genetic alphabet to 6 members with the introduction of the nucleosides, dTPT3 and dNaM, which creates a third base-pair, dTPT3-dNaM.  Other scientists have achieved similar results with other base-pairs.  However, the hope is the expanded genetic alphabet will lead to the development of new proteins, life forms, and functions.

I theorise that this is just one aspect of how we can manipulate and use genetics.

We should be able to build the genetic components necessary to build a genetic Turing machine or a genetic pushdown automaton.
This would require that genetic information can be read forwards and backwards.

In the case of genetic pushdown automata, it requires the addition of a genetic stack that can be manipulated.
In the case of genetic Turing machines, it requires the ability to swap a base for another.

These changes allow the possibility of genetic computation.
However, this form of computation would be vastly superior to the computation that Turing machines provide.

Turing machines historically only account for digital computation.  Turing machines have been used to validate whether a digital computation is possible, whether code written for a computer program has valid syntax or not, what the limits of computation are.  But a Turing machine does not validate that a program runs as intended.  It does not, or at least it is not intended to be used to, evaluate the evolution of a computer program over its lifetime.  I've seen a Turing machine being made out of Conway's Game of Life, but could a Turing machine simulate Conway's Game of Life?  In theory, yes, but I'm not sure if it has been done.

I've never heard about Turing machines being applied to real-world objects that have properties like shape, charge, and function.
The idea that the outputs of a Turing machine can interact with one another must be of a higher order of computation.

The outputs of genetic code, proteins, can perform functions in the real world, they can be composed and perform even higher-level functions.  Imagine if genetic code also had the property of being able to count and store state.  On the third reading of this genetic code, do something different!

We know that genetic code produces proteins that combine and then read the very code that created them, but what if these proteins could also manipulate the code that produced them? This would allow proteins to store state within genetic code.  Information about the outside environment could be stored within a genetic code and then expressed at a later time!

## What if a form of genetic code is used in neurons of the brain to store state to read and respond to input signals?

Eg when an input is received via dendrites, the DNA is read, possibly altered, and possibly sends some signals out via the axon terminals.

This would mean that given an input signal, the neuron would output a specific series of output signals.
This is a one-to-many relationship.  One input signal to zero or more output signals.

The output signals aren't all sent to the same place, they are sent down specific paths to connect with specific neurons.
Therefore, the series of inputs received by a neuron will not always match the output of another neuron, the input signal is just a subset of the output signal series from another neuron.

Likewise, a neuron gets input signals from multiple other neurons at the same time.  So in this theory, does the sequence of input signals matter?  Are there race conditions?  Is there locking?

What would this mean for human memory?

What would this mean for computational theory?
