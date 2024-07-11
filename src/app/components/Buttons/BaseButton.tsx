import clsx from 'clsx';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { MouseEvent } from 'react';

import DefaultMotionDiv from '../DefaultMotionDiv';
import Spinner from '../Spinner';

interface BaseButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  fixedWIdth?: boolean;
  width?: number;
  hasBadge?: boolean;
  onView?: boolean;
  size?: 'SM' | 'L';
  text?: string;
  onClick?: CallableFunction;
  colorClass: string;
  iconColorClass?: string;
  icon?: React.ReactNode;
  disabledClass?: string;
  spinnerType?: 'default' | 'light' | 'disabled';
  loadingPlaceholder?: string;
  disabledIconClass?: string;
  pressedClass?: string;
}

export default function BaseButton({
  disabled,
  text,
  hasBadge,
  isLoading,
  fixedWIdth,
  onView,
  width,
  onClick,
  iconColorClass = 'btn-primary-ghost-icon',
  colorClass,
  icon,
  disabledClass = 'btn-disabled',
  disabledIconClass = 'btn-disabled-icon-ghost-secondary',
  spinnerType = 'light',
  loadingPlaceholder = 'Processing..',
  pressedClass = 'btn-primary-pressed',
}: BaseButtonProps) {
  return (
    <button
      data-cy="btn-test"
      onClick={(event: MouseEvent<HTMLElement>) => onClick && onClick(event)}
      className={clsx(colorClass, {
        'btn-base': true,
        [pressedClass]: onView,
        'w-[136px] p-0': fixedWIdth,
        [disabledClass]: disabled || isLoading,
      })}
      type="submit"
      form="form"
      disabled={disabled || isLoading}
      style={{ width: `${width}px` }}
    >
      {!isLoading ? (
        <DefaultMotionDiv divKey="button-text">
          <div className="flex items-center justify-center">
            {icon && (
              <div className="flex pr-1">
                {hasBadge ? (
                  <>
                    <div className="flex absolute translate-x-[16px] z-20">
                      {!disabled ? (
                        <Image
                          src="/badge-icon.svg"
                          alt="badge"
                          height={12}
                          width={12}
                          quality={100}
                        />
                      ) : (
                        <Image
                          src="/badge-disabled-icon.svg"
                          alt="badge"
                          height={12}
                          width={12}
                          quality={100}
                        />
                      )}
                    </div>
                    <div
                      className={clsx({
                        'flex mr-1.5': true,
                        [disabledIconClass]: disabled,
                      })}
                    >
                      {icon}
                    </div>
                  </>
                ) : (
                  <div
                    className={clsx({
                      flex: true,
                      [iconColorClass]: icon && !disabled,
                      [disabledIconClass]: disabled,
                    })}
                  >
                    {icon}
                  </div>
                )}
              </div>
            )}
            {text}
          </div>
        </DefaultMotionDiv>
      ) : (
        <div
          className={clsx({
            'flex items-center justify-center h-full default-transition': true,
          })}
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 22 }}
            transition={{ duration: 0.3 }}
          >
            <Spinner size="sm" color={spinnerType} />
          </motion.div>
          <motion.div animate={{ x: 5 }} transition={{ duration: 0.3 }}>
            <span>{loadingPlaceholder}</span>
          </motion.div>
        </div>
      )}
    </button>
  );
}
