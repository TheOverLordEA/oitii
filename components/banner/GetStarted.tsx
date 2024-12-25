"use client";

import React from "react";
import styled from "styled-components";

// Define types for shapes (you can expand this as needed)
interface ShapeProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  color: string;
  rotation?: number;
}

const Shape = styled.div<ShapeProps>`
  position: absolute;
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
  background-color: ${(props) => props.color};
  transform: rotate(${(props) => props.rotation || 0}deg);
  ${(props) => props.width && `width: ${props.width}%;`}
  ${(props) => props.height && `height: ${props.height}%;`}
  ${(props) => props.radius && `border-radius: ${props.radius}%;`}
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed */
  background-color: white; /* Important for the white background */
  overflow: hidden; /* Prevents shapes from overflowing */
`;

const CallToAction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap; /* Prevents text from wrapping */
`;

const GetStarted: React.FC = () => {
  return (
    <Container>
      {/* Example shapes - adjust positions, sizes, and colors */}
      <Shape
        x={5}
        y={10}
        width={10}
        height={25}
        radius={50}
        color="royalblue"
        rotation={-20}
      />
      <Shape x={15} y={10} width={20} height={15} color="sienna" />
      <Shape
        x={17}
        y={12}
        width={18}
        height={5}
        color="lightgreen"
        radius={50}
      />
      <Shape
        x={20}
        y={14}
        width={10}
        height={5}
        color="lightgreen"
        rotation={-10}
      />
      <Shape
        x={23}
        y={16}
        width={10}
        height={5}
        color="lightgreen"
        rotation={10}
      />
      <Shape
        x={40}
        y={15}
        width={10}
        height={10}
        color="forestgreen"
        rotation={45}
      />
      <Shape
        x={45}
        y={12}
        width={15}
        height={15}
        radius={50}
        color="lightcoral"
      />
      <Shape x={50} y={10} width={10} height={20} radius={50} color="brown" />

      <Shape x={70} y={10} width={15} height={15} color="coral" />
      <Shape
        x={75}
        y={15}
        width={15}
        height={20}
        radius={50}
        color="lightpink"
      />
      <Shape
        x={78}
        y={17}
        width={15}
        height={15}
        color="goldenrod"
        radius={20}
      />

      <Shape x={5} y={50} width={10} height={15} color="lightcoral" />
      <Shape x={7} y={52} width={5} height={10} color="goldenrod" />

      <Shape
        x={30}
        y={60}
        width={15}
        height={20}
        radius={0}
        color="mediumslateblue"
      />
      <Shape
        x={30}
        y={60}
        width={15}
        height={5}
        radius={50}
        color="royalblue"
      />
      <Shape
        x={30}
        y={67}
        width={15}
        height={5}
        radius={50}
        color="mediumslateblue"
      />
      <Shape
        x={30}
        y={74}
        width={15}
        height={5}
        radius={50}
        color="royalblue"
      />

      <Shape x={70} y={60} width={15} height={20} color="mediumpurple" />
      <Shape x={72} y={62} width={10} height={10} color="firebrick" />
      <Shape
        x={70}
        y={60}
        width={5}
        height={5}
        radius={50}
        color="lightgoldenrodyellow"
      />
      <Shape
        x={70}
        y={75}
        width={5}
        height={5}
        radius={50}
        color="lightgoldenrodyellow"
      />
      <Shape
        x={80}
        y={60}
        width={5}
        height={5}
        radius={50}
        color="lightgoldenrodyellow"
      />
      <Shape
        x={80}
        y={75}
        width={5}
        height={5}
        radius={50}
        color="lightgoldenrodyellow"
      />

      <CallToAction>Get started for free</CallToAction>
    </Container>
  );
};

export default GetStarted;
