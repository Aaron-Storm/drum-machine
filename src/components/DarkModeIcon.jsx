import { useRef } from "react";
import { useButton } from "@react-aria/button";
import './DarkModeIcon.css';


function DarkModeIcon(props) {
  
  let ref = useRef();
  let { buttonProps } = useButton(
    {
      ...props,
      elementType: 'svg'
    },
    ref
  );

  return (
    <svg
      {...buttonProps}
      className='theme'
      ref={ref}
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="iconTheme">
        <path
          id="inside"
          d="M30.5 40.6667C33.1964 40.6667 35.7823 39.5955 37.6889 37.6889C39.5955 35.7823 40.6667 33.1964 40.6667 30.5C40.6667 27.8036 39.5955 25.2177 37.6889 23.3111C35.7823 21.4045 33.1964 20.3333 30.5 20.3333V40.6667Z"
          fill="white"
        />
        <path
          id="outside"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.5 5.08334C16.4624 5.08334 5.08334 16.4624 5.08334 30.5C5.08334 44.5376 16.4624 55.9167 30.5 55.9167C44.5376 55.9167 55.9167 44.5376 55.9167 30.5C55.9167 16.4624 44.5376 5.08334 30.5 5.08334ZM30.5 10.1667V20.3333C27.8036 20.3333 25.2177 21.4045 23.3111 23.3111C21.4045 25.2177 20.3333 27.8036 20.3333 30.5C20.3333 33.1964 21.4045 35.7823 23.3111 37.6889C25.2177 39.5956 27.8036 40.6667 30.5 40.6667V50.8333C35.8927 50.8333 41.0646 48.6911 44.8779 44.8779C48.6911 41.0646 50.8333 35.8927 50.8333 30.5C50.8333 25.1073 48.6911 19.9354 44.8779 16.1222C41.0646 12.3089 35.8927 10.1667 30.5 10.1667V10.1667Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export default DarkModeIcon;
