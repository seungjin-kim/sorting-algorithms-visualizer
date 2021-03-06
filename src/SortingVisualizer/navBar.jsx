import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  UncontrolledPopover, 
  PopoverHeader, 
  PopoverBody
} from 'reactstrap';

const Topbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {toggleButtonStatus, mergeSort, heapSort, quickSort, bubbleSort} = props;


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="https://seungjin-kim.github.io/sorting-algorithms-visualizer/">Sorting Algorithms Visualizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Button disabled={props.isDisabled} color="secondary" onClick={props.resetArray}>Generate New Array</Button >{' '}
            <NavItem>
              <NavLink disabled={props.isDisabled} href="#" 
                onClick={() => {
                  toggleButtonStatus(bubbleSort);
                }}>
              Bubble Sort</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled={props.isDisabled} href="#" 
                onClick={() => {
                  toggleButtonStatus(quickSort);
                }}>
              Quick Sort</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled={props.isDisabled} href="#" 
                onClick={() => {
                  toggleButtonStatus(heapSort);
                }}>
              Heap Sort</NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                disabled={props.isDisabled} 
                href="#" 
                onClick={() => {
                  toggleButtonStatus(mergeSort);
                }}>
              Merge Sort</NavLink>
            </NavItem>

            <Button outline color="info" id="PopoverLegacy" type="button">
              Complexity
            </Button>
            <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
              <PopoverHeader>Time & Space Complexity</PopoverHeader>
              <PopoverBody>
                Bubble sort time complexity is O(n^2) in worst case and O(n) in average and best. Space complexity is O(1). 
                Quick sort time complexity is O(n^2) in worst case and O(nlog(n)) in average and best. Space complexity is O(log(n)). 
                Heap Sort time coplexity is O(nlog(n)). Space complexity is O(1).
                Merge Sort time complexity is O(nlog(n)). Space complexity is O(n). 
                *Note that complexity depends on implementation details. Refer to code in github to see how the above complexity was achieved for this visualization.
              </PopoverBody>
            </UncontrolledPopover>
          </Nav>
          <NavbarText>
            <NavLink href="https://github.com/seungjin-kim/sorting-algorithms-visualizer">GitHub</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;