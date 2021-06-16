
function setProgress(percent, selector, text, caption) {
var circle = document.querySelector(selector);
var circleText = document.querySelector(selector + "-val");
var circleCap = document.querySelector(selector + "-cap");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

const offset = circumference - percent / 100 * circumference;
circleText.innerHTML = text || numberShort(percent);
circleCap.innerHTML = caption || 'Savings';
circle.style.strokeDashoffset = offset;
}


function numberShort(value) {
if (value < 1000) return numberShortFormat(value, '');
if (value < 1000000) return numberShortFormat((value / 1000).toFixed(), 'K');
if (value < 10000000) return numberShortFormat((value / 1000000).toFixed(1), 'M');
if (value < 1000000000) return numberShortFormat((value / 1000000).toFixed(), 'M');
if (value < 10000000000) return numberShortFormat((value / 1000000000).toFixed(1), 'B');
if (value < 1000000000000) return numberShortFormat((value / 1000000000).toFixed(), 'B');
return numberShortFormat(value, '');
}

function numberShortFormat(value, appender) {
	return value.toString().replace(/^0\./, '.') + appender;
}

	$('.jqslider-styles').each(function () {
		var sliderMin = $(this).data('min');
		var sliderMax = $(this).data('max');
		var sliderStep = $(this).data('step');
		var sliderValue = $(this).data('value');
		$(this).slider({
			range: 'min',
			min: parseFloat(sliderMin),
			max: parseFloat(sliderMax),
			step: parseFloat(sliderStep),
			value: parseFloat(sliderValue),
			slide: function (event, ui) {
				$('#' + $(this).attr('id') + '-value').val(ui.value);
				updateChart();
			}
		});
	})

	$('.slider-value').each(function () {
		// var testnum = $('#' + $(this).data('slider-ref')).slider('value');
		// testnum = testnum.toLocaleString();
		$(this).val($('#' + $(this).data('slider-ref')).slider('value'));
		$(this).on('input', function () {
			$('#' + $(this).data('slider-ref')).slider('value', $(this).val());
			updateChart();
		})
	})

	ROICalc.init({
		inputs: {
			event: 'input'
		}
	});

	var updateChart = async function(){ 

		await Promise.all([
			ROICalc.model.updateAll(),
			ROICalc.model.calculate.sales.run(),
			ROICalc.model.calculate.care.run(),
			ROICalc.model.calculate.totals.run()
		]);

		var estimatedTotalBenefit = 0;
		//$('#two .bar').find('.tooltip').empty();

		var oneObj = {
			element: [{
				name: "#two",
				numbers: [ROICalc.results.totals.growth.year1, ROICalc.results.totals.savings.year1, ROICalc.results.totals.growth.year2, ROICalc.results.totals.savings.year2, ROICalc.results.totals.growth.year3, ROICalc.results.totals.savings.year3],
				totals: [ROICalc.results.totals.total_benefit.year1, ROICalc.results.totals.total_benefit.year2, ROICalc.results.totals.total_benefit.year3]
			}]
		}
		
		$('.annual_traffc').text(ROICalc.model.inputs['sales-traffic'].toLocaleString());
		
		var totalBenefit = ROICalc.results.totals.total_benefit.year1 + ROICalc.results.totals.total_benefit.year2 + ROICalc.results.totals.total_benefit.year3;
		var circle1val = ROICalc.results.sales.increase.year1 + ROICalc.results.sales.increase.year2 + ROICalc.results.sales.increase.year3;
		var circle2val = ROICalc.results.sales.average_order_value.year1 + ROICalc.results.sales.average_order_value.year2 + ROICalc.results.sales.average_order_value.year3;
		var fcr = ROICalc.results.care.fcr.year1 + ROICalc.results.care.fcr.year2 + ROICalc.results.care.fcr.year3;
		var circle5val = ROICalc.results.care.efficiency.year1 + ROICalc.results.care.efficiency.year2 + ROICalc.results.care.efficiency.year3;
		var circle4val = ROICalc.results.care.ai_scale.year1 + ROICalc.results.care.ai_scale.year2 + ROICalc.results.care.ai_scale.year3;
		setProgress(((circle1val / totalBenefit)*100).toFixed(), '#circle1', numberShort(circle1val), 'Growth');
		setProgress(((circle2val / circle1val)*100).toFixed(), '#circle2', numberShort(circle2val), 'Growth');
		setProgress(((fcr / totalBenefit)*100).toFixed(), '#circle3', numberShort(fcr), 'Growth');
		setProgress(((circle4val / totalBenefit)*100).toFixed(), '#circle4', numberShort(circle4val), 'Savings');
		setProgress(((circle5val / circle5val)*100).toFixed(), '#circle5', numberShort(circle5val), 'Savings');
		
		$('#text_total_benefit').text("$" + numberShort(totalBenefit));
		$('#text_year1').text("$" + numberShort(ROICalc.results.totals.total_benefit.year1));
					$('#text_year2').text("$" + numberShort(ROICalc.results.totals.total_benefit.year2));
		$('#text_year3').text("$" + numberShort(ROICalc.results.totals.total_benefit.year3));
		$('#text-incr').text("$" + numberShort(circle1val));
		$('#text-ai-savings').text("$" + numberShort(circle4val));
		$('#text-efficiency').text("$" + numberShort(circle5val));
		$('#cost-per-convo-phone').text("$" + numberShort(ROICalc.model.inputs['care-cost-per-call'].toFixed()));
		$('#cost-per-convo-mess').text("$" + numberShort((ROICalc.model.inputs['care-cost-per-call'] / ROICalc.model.calculate.care.increments.year3.eff_ratio).toFixed()));
		
		$('#rev-baseline').text("$" + numberShort(ROICalc.results.sales.increase.baseline));
					$('#rev-year1').text("$" + numberShort(ROICalc.results.sales.increase.year1));
					$('#rev-year2').text("$" + numberShort(ROICalc.results.sales.increase.year2));
					$('#rev-year3').text("$" + numberShort(ROICalc.results.sales.increase.year3));
		
		$('#inc-baseline').text("$" + numberShort(ROICalc.results.sales.average_order_value.baseline));
					$('#inc-year1').text("$" + numberShort(ROICalc.results.sales.average_order_value.year1));
					$('#inc-year2').text("$" + numberShort(ROICalc.results.sales.average_order_value.year2));
					$('#inc-year3').text("$" + numberShort(ROICalc.results.sales.average_order_value.year3));
		
		$('#fcr-baseline').text("$" + numberShort(ROICalc.results.care.fcr.baseline));
					$('#fcr-year1').text("$" + numberShort(ROICalc.results.care.fcr.year1));
					$('#fcr-year2').text("$" + numberShort(ROICalc.results.care.fcr.year2));
					$('#fcr-year3').text("$" + numberShort(ROICalc.results.care.fcr.year3));
		
		$('#mess-baseline').text("$" + numberShort(ROICalc.results.care.ai_scale.baseline));
					$('#mess-year1').text("$" + numberShort(ROICalc.results.care.ai_scale.year1));
					$('#mess-year2').text("$" + numberShort(ROICalc.results.care.ai_scale.year2));
					$('#mess-year3').text("$" + numberShort(ROICalc.results.care.ai_scale.year3));
		
		$('#eff-baseline').text("$" + numberShort(ROICalc.results.care.efficiency.baseline));
					$('#eff-year1').text("$" + numberShort(ROICalc.results.care.efficiency.year1));
					$('#eff-year2').text("$" + numberShort(ROICalc.results.care.efficiency.year2));
					$('#eff-year3').text("$" + numberShort(ROICalc.results.care.efficiency.year3));
		
		setTimeout(function () {
			$('#two .bar').each(function (index) {
				// To better represent % of height
				var numberAlter = (oneObj.element[0].numbers[index] / 1000000).toFixed(2);
				var numbersFull = numberAlter * 5.5;
				$(this).css({
					'height': numbersFull + '%'
				});
				// Create tooltip
				$(this).find('.tooltip').text('$' + numberAlter + 'M');
				// $('<span class="tooltip">' + oneObj.element[0].numbers[index] + 'M</span>')
				//     .prependTo(this);
			});

			$('#two .total-year-benefit').each(function (year) {
				estimatedTotalBenefit += oneObj.element[0].totals[year];
				var numberAlter = (oneObj.element[0].totals[year] / 1000000).toFixed(2);
				$(this).text('$' + numberAlter + 'M');
				var estimatedTotalBenefitAlter = (estimatedTotalBenefit / 1000000).toFixed(2);
				$('#two .estimated-total-benefit').text('$' + estimatedTotalBenefitAlter + 'M');
			});

			

		}, 500);
	}

	$('.industry-select').change(function(){
		var salesConvRate = $(this).find(':selected').data('sales-conv-rate');
		var salesAvgOrder = $(this).find(':selected').data('sales-avg-order');
		var careCostPerCall = $(this).find(':selected').data('care-cost-per-call');
		var careContactResolution = $(this).find(':selected').data('care-contact-resolution');
		$('#slider2-value').val(salesConvRate);
		$('#slider2').slider('value', salesConvRate);
		$('#slider3-value').val(salesAvgOrder);
		$('#slider3').slider('value', salesAvgOrder);
		$('#slider5-value').val(careCostPerCall);
		$('#slider5').slider('value', careCostPerCall);
		$('#slider6-value').val(careContactResolution);
		$('#slider6').slider('value', careContactResolution);
		ROICalc.init();
		updateChart();
	})

	updateChart();

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	// Total growth on bottom blue
	// Total savings on top orange
	// Total benefit is the sum white number on top