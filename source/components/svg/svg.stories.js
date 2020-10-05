import React from 'react';

import Svg from './index';

export default {
  title: 'Svg',
  component: Svg,
};

export const All = () => (
  <div>
    <Svg width={48} height={48} />
    <Svg src="555555555555555" />
    <br />
    <Svg width={48} height={48} src="logo/afiliados-icon" />
    <Svg width={150} height={50} src="logo/afiliados" />
    <Svg width={50} height={50} src="flame" />
    <Svg width={50} height={50} src="cupom" />
    <br />
    <br />
    <Svg width={48} height={48} src="logo/acom" />
    &nbsp;
    <Svg width={48} height={48} src="logo/suba" />
    &nbsp;
    <Svg width={48} height={48} src="logo/shop" />
    &nbsp;
    <Svg width={48} height={48} src="logo/soub" />
    &nbsp;
    <br />
    <Svg width={150} height={70} src="logo/suba-full-color" />
    &nbsp;
    <Svg width={150} height={70} src="logo/shop-full-color" />
    &nbsp;
    <Svg width={150} height={70} src="logo/acom-full-color" />
    &nbsp;
    <Svg width={150} height={70} src="logo/soub-full-color" />
    &nbsp;
  </div>
);
