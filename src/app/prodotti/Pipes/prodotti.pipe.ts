import { Pipe, PipeDecorator, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
})
export class TransformToSpacesPipe implements PipeTransform {
  transform(value: string, character: string) {
    return value.replace(character, ' ');
  }
}
