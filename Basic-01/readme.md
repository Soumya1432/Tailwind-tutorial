Tailwind is a css framework that uses low-level utility classes ti create layouts, this is known
as a utitlity framework

Taditional css frameworks liek boostrap use classess that are directly correlated to components(e.g Alerts, Navbars)
Tailwind uses classes as utitlities to put together to build your own  custom components

1.What are utility classes and theri advantage?
Utility classes are simple HTML classes typically scoped to a single and specific css property
 --> Named according to their purpose
 --> Easy to understand and remember
 --> You know exactly what it does
 --> No naming inconsistenties
 --> Allow for very fast layout creation and testing


 properties:
 1. Newer framework that is gaining popularity
 2. Low-level classes for fast UI development
 3. More flexibility and uniqueness
 4. Customizable with directives & functions

 @Tailwind has conditional class naming for breakpoints as well as states such as hover,focus etc.

 <div class="flex flex-col md:flex-row">
 <div><a href="#" class="hover:text-blue-500">Item 1</a> </div>
 <div><a href="#" class="hover:text-blue-500">Item 1</a> </div>
 </div>

 ----> On medium screen and up , we actually want it to be a flex row, which is a horizontal

***Q.1 How to write 10 div short term
 div{Item $} *10  , here $=number sign , 
***Q.2 What is Z-index?
= The indexes is kind of the placement on how far away from you or how far towards you towards the screen
