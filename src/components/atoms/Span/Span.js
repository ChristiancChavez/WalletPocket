import React from "react";
// Styles
import { StyledSpan, StyledAnchor } from "./span.styles";

const Span = ({ children, fontSize, weight, color, title, margin }) => {

  return (
    <>
      { title ? 
        (
        <StyledSpan fontSize={fontSize} weight={weight} color={color} margin={margin}>
          {children}
        </StyledSpan>
        )
        :
        (
          <StyledAnchor fontSize={fontSize} weight={weight} color={color} margin={margin}>
          {children}
        </StyledAnchor>
        )
      }
    </>
  );
};

export default Span;
