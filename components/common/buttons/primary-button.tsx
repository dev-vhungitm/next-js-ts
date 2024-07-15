import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './primary-button.module.scss';

export interface IPrimaryButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const PrimaryButton = (props: IPrimaryButtonProps) => {
  let className = styles.main;
  if (props.className) className += ' ' + props.className;

  return <button {...props} className={className} />;
};
