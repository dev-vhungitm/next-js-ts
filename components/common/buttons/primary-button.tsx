import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './primary-button.module.scss';

export interface PrimaryButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  let className = styles.main;
  if (props.className) className += ' ' + props.className;

  return <button {...props} className={className} />;
};
