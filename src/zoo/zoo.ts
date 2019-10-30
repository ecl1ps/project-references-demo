import { createDog } from '../animals';

import { Dog as Dog1 } from 'animals/dog';
import { Dog as Dog2 } from 'animals';

import { Dog as Dog3 } from '@animals/dog';
import { Dog as Dog4 } from '@animals';

export function createZoo(): Array<Dog1 | Dog2 | Dog3 | Dog4> {
    return [
        createDog()
    ];
}