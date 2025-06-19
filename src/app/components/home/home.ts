import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { Menubar } from 'primeng/menubar';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Dock, CommonModule, FormsModule, TooltipModule, Menubar, Dialog],
  standalone: true,
  styleUrl: './home.scss',
  styles: [
    ` .dock-window {
            margin: 0;
            width: 100%;
            height: 100vh;
            background-position: center;
            background-image: url('https://primefaces.org/cdn/primevue/images/dock/window.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }
        .p-dock {
            z-index: 1000;
        }`
  ]
})
export class Home implements OnInit {
  items: MenuItem[] | undefined;

  menuItems: MenuItem[] | undefined;
  displayFinder: boolean = false;

  position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  positionOptions = [
    { label: 'Bottom', value: 'bottom' as const },
    { label: 'Top', value: 'top' as const },
    { label: 'Left', value: 'left' as const },
    { label: 'Right', value: 'right' as const }
  ];

  ngOnInit() {
    this.items = [
      {
        label: 'GitHub',
        icon: 'https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000',
        command: () => {
          this.displayFinder = true;
        }
      },
      {
        label: 'Instagram',
        icon: 'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000'
      },
      {
        label: 'Facebook',
        icon: 'https://img.icons8.com/?size=100&id=13912&format=png&color=000000'
      },
      {
        label: 'LinkedIn',
        icon: 'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000'
      },
      {
        label: 'X',
        icon: 'https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000'
      }
    ];

    this.menuItems = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'About',
                icon: 'pi pi-star'
            },
            {
                label: 'Skills',
                icon: 'pi pi-briefcase',
            },
            {
                label: 'Resume',
                icon: 'pi pi-file',
            },
            {
               label: 'Projects',
                icon: 'pi pi-folder-open',
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
  }
}