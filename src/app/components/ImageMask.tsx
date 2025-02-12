"use client"
import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

export default function ImageMask() {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <HexGrid width={650} height={400}>
        <Layout size={{ x: 20, y: 20 }} flat={true} spacing={1.1} origin={{ x: -30, y: -40 }}>
          <Hexagon q={1} r={0} s={-1} />
          <Hexagon q={2} r={0} s={-1} />
          <Hexagon q={0} r={1} s={1}  />
          <Hexagon q={1} r={1} s={1}  />
        </Layout>
      </HexGrid>
    </div>
  );
}