jQuery(function(a){function b(){return{language:{errorLoading:function(){return wc_country_select_params.i18n_searching},inputTooLong:function(a){var b=a.input.length-a.maximum;return 1===b?wc_country_select_params.i18n_input_too_long_1:wc_country_select_params.i18n_input_too_long_n.replace("%qty%",b)},inputTooShort:function(a){var b=a.minimum-a.input.length;return 1===b?wc_country_select_params.i18n_input_too_short_1:wc_country_select_params.i18n_input_too_short_n.replace("%qty%",b)},loadingMore:function(){return wc_country_select_params.i18n_load_more},maximumSelected:function(a){return 1===a.maximum?wc_country_select_params.i18n_selection_too_long_1:wc_country_select_params.i18n_selection_too_long_n.replace("%qty%",a.maximum)},noResults:function(){return wc_country_select_params.i18n_no_matches},searching:function(){return wc_country_select_params.i18n_searching}}}}if("undefined"==typeof wc_country_select_params)return!1;if(a().select2){var c=function(){a("select.country_select:visible, select.state_select:visible").each(function(){var c=a.extend({placeholderOption:"first",width:"100%"},b());a(this).select2(c),a(this).on("select2:select",function(){a(this).focus()})})};c(),a(document.body).bind("country_to_state_changed",function(){c()})}var d=wc_country_select_params.countries.replace(/&quot;/g,'"'),e=a.parseJSON(d);a(document.body).on("change","select.country_to_state, input.country_to_state",function(){var b=a(this).closest(".woocommerce-billing-fields, .woocommerce-shipping-fields, .woocommerce-shipping-calculator");b.length||(b=a(this).closest(".form-row").parent());var c=a(this).val(),d=b.find("#billing_state, #shipping_state, #calc_shipping_state"),f=d.parent(),g=d.attr("name"),h=d.attr("id"),i=d.val(),j=d.attr("placeholder")||d.attr("data-placeholder")||"";if(e[c])if(a.isEmptyObject(e[c]))d.parent().hide().find(".select2-container").remove(),d.replaceWith('<input type="hidden" class="hidden" name="'+g+'" id="'+h+'" value="" placeholder="'+j+'" />'),a(document.body).trigger("country_to_state_changed",[c,b]);else{var k="",l=e[c];for(var m in l)l.hasOwnProperty(m)&&(k=k+'<option value="'+m+'">'+l[m]+"</option>");d.parent().show(),d.is("input")&&(d.replaceWith('<select name="'+g+'" id="'+h+'" class="state_select" data-placeholder="'+j+'"></select>'),d=b.find("#billing_state, #shipping_state, #calc_shipping_state")),d.html('<option value="">'+wc_country_select_params.i18n_select_state_text+"</option>"+k),d.val(i).change(),a(document.body).trigger("country_to_state_changed",[c,b])}else d.is("select")?(f.show().find(".select2-container").remove(),d.replaceWith('<input type="text" class="input-text" name="'+g+'" id="'+h+'" placeholder="'+j+'" />'),a(document.body).trigger("country_to_state_changed",[c,b])):d.is('input[type="hidden"]')&&(f.show().find(".select2-container").remove(),d.replaceWith('<input type="text" class="input-text" name="'+g+'" id="'+h+'" placeholder="'+j+'" />'),a(document.body).trigger("country_to_state_changed",[c,b]));a(document.body).trigger("country_to_state_changing",[c,b])}),a(function(){a(":input.country_to_state").change()})});