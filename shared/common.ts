export type Platform = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const PLATFORMS: Platform[] = [
    { x: 40, y: 530, width: 288, height: 16 },
    { x: 340, y: 440, width: 192, height: 16 },
    { x: 140, y: 250, width: 192, height: 16 },
    { x: 360, y: 270, width: 288, height: 16 },
    { x: 704, y: 200, width: 96, height: 16 },
    { x: 0, y: 584, width: 800, height: 16 },
]

export const GAME_HEIGHT = 600;
export const GAME_WIDTH = 800;