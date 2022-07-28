import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../src';

describe('Button', () => {
  describe('render', () => {
    test('default', () => {
      render(<Button onClick={console.log}>render default</Button>);
      const button = screen.getByText('render default');
      expect(button.classList.contains('primary')).toBeTruthy();
    });
    test('success', () => {
      const { container } = render(
        <Button variant="success" onClick={console.log}>
          render success
        </Button>
      );
      const button = container.querySelector('button');
      expect(button!.classList.contains('success')).toBeTruthy();
    });
  });

  describe('clickable', () => {
    test('default', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>clickable default</Button>);
      fireEvent.click(screen.getByText('clickable default'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
    test('disabled', () => {
      const onClick = jest.fn();
      render(
        <Button disabled={true} onClick={onClick}>
          clickable disabled
        </Button>
      );
      fireEvent.click(screen.getByText('clickable disabled'));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
