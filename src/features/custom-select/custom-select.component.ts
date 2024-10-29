import { Component } from '@angular/core';
import { SelectModule } from '../../../custom-form-control/rating-picker/src/public-api';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [SelectModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
})
export class CustomSelectComponent {

  onSelectionChanged(value: string | null) {
    console.log('selected value...', value)
  }

}
