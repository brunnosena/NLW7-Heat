declare module "*.sgv" {
  import React from "react";
  import { SVGProps } from "react-native-svg";
  const SvgComponent: React.FC<SVGProps>;
  export default SvgComponent;
}