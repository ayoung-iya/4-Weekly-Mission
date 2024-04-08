import { createContext } from 'react';
import type { Folder, LinkTypes } from '@/types/types';

export const FoldersContext = createContext<Folder[]>([]);

export const LinkListContext = createContext<LinkTypes[]>([]);
