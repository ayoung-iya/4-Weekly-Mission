import { createContext } from 'react';
import { Folder, LinkTypes } from '@/types/types';

export const FoldersContext = createContext<Folder[]>([]);

export const LinkListContext = createContext<LinkTypes[]>([]);