import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @ViewChild('editor', { read: ElementRef, static: true })
  editor: ElementRef<HTMLElement> | undefined;
  constructor() { }
  // doc : any ;
  // iframe: any ;

  ngAfterViewInit() {
    // define custom styles
    const customStyles = `
      html,body {
        font-size: 10%;
      }
    `;

    // get reference to the underlying iframe
    const iframeDoc = (
      this.editor?.nativeElement.querySelector('iframe') as HTMLIFrameElement
    ).contentDocument;

    // create a style tag inside the iframe
    const style = iframeDoc?.createElement('style') as HTMLStyleElement;

    // add styles to the style tag
    style?.appendChild(iframeDoc!.createTextNode(customStyles));

    // append the newly created style tag to the iframe's head tag
    iframeDoc?.head.appendChild(style);
  }

  ngOnInit(): void {
      // this.iframe = document.getElementById("my-iframe");
      // this.doc = this.iframe?.contentDocument ;
      // this.doc.body.innerHTML = this.doc.body.innerHTML + '<style> html,body{font-size: 10px;} </style>'
  }
}
