/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ComposeProps {
  components: Array<React.ComponentType<any>>;
  children: React.ReactNode;
}

export const Compose: React.FC<ComposeProps> = ({
  components = [],
  children,
}) => {
  return (
    <>
      {components.reduceRight(
        (acc, Component) => (
          <Component>{acc}</Component>
        ),
        children,
      )}
    </>
  );
};
