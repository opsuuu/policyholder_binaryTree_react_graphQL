import { useContext } from "react";
import {PolicyholderContext} from '../context/PolicyholderContext'
import {PolicyholdersContextType} from '../types/common'
 
export const usePolicyholder = () =>
    useContext(PolicyholderContext) as PolicyholdersContextType;