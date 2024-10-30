import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CalciComponent } from './components/calci/calci.component';

export const routes: Routes = [{path : 'calci', component : CalciComponent}];
