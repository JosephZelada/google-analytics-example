import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { SkyAppConfig } from '@skyux/config';

export interface Configuration {
}

@Injectable()
export class AppConfiguration implements Configuration {

  constructor(protected skyAppConfig: SkyAppConfig, @Inject(DOCUMENT) protected document: Document) {
  }
}
