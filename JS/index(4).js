/*
Write a function that accepts two numbers and a operator like (+,-,*, /) from user and performs the
appropriate operation indicated by the operator.
*/
let  num1 = parseInt(prompt("Enter first number"))
let  num2 = parseInt(prompt("Enter second number"))
do{
  console.log("1. + \n2.- \n3.* \n4./ \n0.exit")
  let choice = parseInt(prompt("Choose which operation you want to perform:"));
  var flag=parseInt(0);
  switch(choice){
    case 1:
      console.log("Addition is : "+ (num1+num2));
      break;
    case 2: 
CSS Transitions
CSS Animations
CSS Tooltips
CSS Style Images
CSS Image Reflection
CSS object-fit
CSS object-position
CSS Masking
CSS Buttons
CSS Pagination
CSS Multiple Columns
CSS User Interface
CSS Variables
CSS Box Sizing
CSS Media Queries
CSS MQ Examples
CSS Flexbox

CSS Responsive
RWD Intro
RWD Viewport
RWD Grid View
RWD Media Queries
RWD Images
RWD Videos
RWD Frameworks
RWD Templates

CSS Grid
Grid Intro
Grid Container
Grid Item

CSS SASS
SASS Tutorial

CSS Examples
CSS Templates
CSS Examples
CSS Editor
CSS Snippets
CSS Quiz
CSS Exercises
CSS Certificate

CSS References
CSS Reference
CSS Selectors
CSS Functions
CSS Reference Aural
CSS Web Safe Fonts
CSS Animatable
CSS Units
CSS PX-EM Converter
CSS Colors
CSS Color Values
CSS Default Values
CSS Browser Support


CSS Box Sizing
CSS Box Sizing

The CSS box-sizing property allows us to include the padding and border in an element's total width and height.
Without the CSS box-sizing Property

By default, the width and height of an element is calculated like this:

width + padding + border = actual width of an element
height + padding + border = actual height of an element

This means: When you set the width/height of an element, the element often appears bigger than you have set (because the element's border and padding are added to the element's specified width/height).

The following illustration shows two <div> elements with the same specified width and height:
This div is smaller (width is 300px and height is 100px).

This div is bigger (width is also 300px and height is 100px).

The two <div> elements above end up with different sizes in the result (because div2 has a padding specified):
Example
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
}

.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
}
CSS Transitions
CSS Animations
CSS Tooltips
CSS Style Images
CSS Image Reflection
CSS object-fit
CSS object-position
CSS Masking
CSS Buttons
CSS Pagination
CSS Multiple Columns
CSS User Interface
CSS Variables
CSS Box Sizing
CSS Media Queries
CSS MQ Examples
CSS Flexbox

CSS Responsive
RWD Intro
RWD Viewport
RWD Grid View
RWD Media Queries
RWD Images
RWD Videos
RWD Frameworks
RWD Templates

CSS Grid
Grid Intro
Grid Container
Grid Item

CSS SASS
SASS Tutorial

CSS Examples
CSS Templates
CSS Examples
CSS Editor
CSS Snippets
CSS Quiz
CSS Exercises
CSS Certificate

CSS References
CSS Reference
CSS Selectors
CSS Functions
CSS Reference Aural
CSS Web Safe Fonts
CSS Animatable
CSS Units
CSS PX-EM Converter
CSS Colors
CSS Color Values
CSS Default Values
CSS Browser Support


CSS Box Sizing
CSS Box Sizing

The CSS box-sizing property allows us to include the padding and border in an element's total width and height.
Without the CSS box-sizing Property

By default, the width and height of an element is calculated like this:

width + padding + border = actual width of an element
height + padding + border = actual height of an element

This means: When you set the width/height of an element, the element often appears bigger than you have set (because the element's border and padding are added to the element's specified width/height).

The following illustration shows two <div> elements with the same specified width and height:
This div is smaller (width is 300px and height is 100px).

This div is bigger (width is also 300px and height is 100px).

The two <div> elements above end up with different sizes in the result (because div2 has a padding specified):
Example
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
}

.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
}
CSS Transitions
CSS Animations
CSS Tooltips
CSS Style Images
CSS Image Reflection
CSS object-fit
CSS object-position
CSS Masking
CSS Buttons
CSS Pagination
CSS Multiple Columns
CSS User Interface
CSS Variables
CSS Box Sizing
CSS Media Queries
CSS MQ Examples
CSS Flexbox

CSS Responsive
RWD Intro
RWD Viewport
RWD Grid View
RWD Media Queries
RWD Images
RWD Videos
RWD Frameworks
RWD Templates

CSS Grid
Grid Intro
Grid Container
Grid Item

CSS SASS
SASS Tutorial

CSS Examples
CSS Templates
CSS Examples
CSS Editor
CSS Snippets
CSS Quiz
CSS Exercises
CSS Certificate

CSS References
CSS Reference
CSS Selectors
CSS Functions
CSS Reference Aural
CSS Web Safe Fonts
CSS Animatable
CSS Units
CSS PX-EM Converter
CSS Colors
CSS Color Values
CSS Default Values
CSS Browser Support


CSS Box Sizing
CSS Box Sizing

The CSS box-sizing property allows us to include the padding and border in an element's total width and height.
Without the CSS box-sizing Property

By default, the width and height of an element is calculated like this:

width + padding + border = actual width of an element
height + padding + border = actual height of an element

This means: When you set the width/height of an element, the element often appears bigger than you have set (because the element's border and padding are added to the element's specified width/height).

The following illustration shows two <div> elements with the same specified width and height:
This div is smaller (width is 300px and height is 100px).

This div is bigger (width is also 300px and height is 100px).

The two <div> elements above end up with different sizes in the result (because div2 has a padding specified):
Example
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
}

.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
}

The box-sizing property solves this problem.
ADVERTISEMENT
With the CSS box-sizing Property

The box-sizing property allows us to include the padding and border in an element's total width and height.

If you set box-sizing: border-box; on an element, padding and border are included in the width and height:
Both divs are the same size now!

The box-sizing property solves this problem.
ADVERTISEMENT
With the CSS box-sizing Property

The box-sizing property allows us to include the padding and border in an element's total width and height.

If you set box-sizing: border-box; on an element, padding and border are included in the width and height:
Both divs are the same size now!

The box-sizing property solves this problem.
ADVERTISEMENT
With the CSS box-sizing Property

The box-sizing property allows us to include the padding and border in an element's total width and height.

If you set box-sizing: border-box; on an element, padding and border are included in the width and height:
Both divs are the same size now!
      console.log("Difference is : "+ (num1-num2));
      break;
    case 3:
      console.log("Multiplication is : "+ (num1*num2));
      break;
    case 4:
      if(num2 == 0)
         console.log("Can't divide by ZERO")
      else
         console.log("Division is : "+ (num1/num2));
      break;
    case 0:
      ++flag;
      console.log("Bye");
      break;
    default: console.log("Enter valid choice :(")
      break;
  }
}while(flag !=1)
