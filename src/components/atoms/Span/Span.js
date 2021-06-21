import React from "react";
// Styles
import { StyledSpan, StyledAnchor } from "./span.styles";

const Span = ({ children, fontSize, weight, color, title }) => {
  return (
    <>
      { title ? 
        (
        <StyledSpan fontSize={fontSize} weight={weight} color={color}>
          {children}
        </StyledSpan>
        )
        :
        (
          <StyledAnchor fontSize={fontSize} weight={weight} color={color}>
          {children}
        </StyledAnchor>
        )
      }
    </>
  );
};

export default Span;
