import { FormControl } from "@angular/forms";
import { RatingOptions } from "../../../custom-form-control/rating-picker/src/public-api";

export type RatingFormType = {
  reviewText: FormControl<string | null>;
  reviewRating: FormControl<RatingOptions | null>
}
