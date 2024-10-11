"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";

interface Tag {
  id: number;
  text: string;
  x: number;
  y: number;
  highlighted?: boolean;
}

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f5f5;
`;

const FloatingTag = styled.div<{ x: number; y: number; highlighted?: boolean }>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  padding: 8px 16px;
  background-color: ${(props) => (props.highlighted ? "#ffcccb" : "white")};
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const CentralText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  z-index: 10;
`;

const FloatingBackground: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const tagTexts = [
    "Web3",
    "Blockchain",
    "Flutter Developers",
    "React Developers",
    "Front End Developers",
    "Los Angeles",
    "Denver",
    "San Francisco",
    "Mental Health",
    "Cyber Security",
    "Aerospace",
    "E-commerce",
    "Full Stack Developers",
  ];

  useEffect(() => {
    const newTags = tagTexts.map((text, index) => ({
      id: index,
      text,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      highlighted: text === "Cyber Security",
    }));
    setTags(newTags);
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setTags((prevTags) =>
        prevTags.map((tag) => ({
          ...tag,
          x: tag.x + (Math.random() - 0.5) * 2,
          y: tag.y + (Math.random() - 0.5) * 2,
        }))
      );
    }, 5000);

    return () => clearInterval(moveInterval);
  }, []);

  return (
    <BackgroundContainer>
      {tags.map((tag) => (
        <FloatingTag
          key={tag.id}
          x={tag.x}
          y={tag.y}
          highlighted={tag.highlighted}
        >
          {tag.text}
        </FloatingTag>
      ))}
      <CentralText>Find what's next</CentralText>
    </BackgroundContainer>
  );
};

export default FloatingBackground;
