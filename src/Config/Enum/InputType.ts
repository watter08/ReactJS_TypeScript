
interface InputInterface {
Button                          ?: string;
Checkbox                        ?: string;
Color                           ?: string;
Date                            ?: string;
Datetimelocal                   ?: string;
Email                           ?: string;
File                            ?: string;
Hidden                          ?: string;
Image                           ?: string;
Month                           ?: string;
Number                          ?: string;
Password                        ?: string;
Radio                           ?: string;
Range                           ?: string;
Reset                           ?: string;
Search                          ?: string;
Submit                          ?: string;
Tel                             ?: string;
Text                            ?: string;
Time                            ?: string;
Url                             ?: string;
Week                            ?: string;
}




export class InputType implements InputInterface {
    Button                  = "button";
    Checkbox                = "checkbox";
    Color                   = "color";
    Date                    = "date";
    Datetimelocal           = "datetime-local";
    Email                   = "email";
    File                    = "file";
    Hidden                  = "hidden";
    Image                   = "image";
    Month                   = "month";
    Number                  = "number";
    Password                = "password";
    Radio                   = "radio";
    Range                   = "range";
    Reset                   = "reset";
    Search                  = "search";
    Submit                  = "submit";
    Tel                     = "tel";
    Text                    = "text";
    Time                    = "time";
    Url                     = "url";
    Week                    = "week";
};