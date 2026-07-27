import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuOpen = signal(false);
  estimateOpen = signal(false);
  monthlyBill = signal(4500);
  estimatedSavings = computed(() => Math.round(this.monthlyBill() * .86));
  activeFaq = signal<number | null>(null);
  activeTestimonial = signal(0);
  testimonials = [
    { quote: 'Solaris made the whole thing feel impossibly easy. It is the best decision we have made for our home—and the view from our app is strangely addictive.', name: 'Amrita & Mohan', location: 'Bengaluru', initials: 'AM', saving: '₹ 4,200 saved / month' },
    { quote: 'The installation was exceptionally neat, the team was on time, and every question was answered clearly. Our bill has come down dramatically.', name: 'Rohan Mehta', location: 'Pune', initials: 'RM', saving: '82% lower electricity bill' },
    { quote: 'We were nervous about the paperwork, but Solaris handled the entire process. It felt simple from the first design call to switch-on day.', name: 'Neha & Kunal', location: 'Mumbai', initials: 'NK', saving: '5.2 kW system installed' },
    { quote: 'The generation tracking gives us real confidence. We can see exactly what our roof is producing and how much the family is saving.', name: 'Ananya Iyer', location: 'Chennai', initials: 'AI', saving: '19.1 kWh generated daily' },
    { quote: 'A great balance of thoughtful design and solid engineering. The panels look clean on our roof and have performed beautifully through the monsoon.', name: 'Vikram Shah', location: 'Ahmedabad', initials: 'VS', saving: '₹ 16L+ lifetime estimate' },
    { quote: 'The team treated our home with real care. They explained the system in plain language, so we always knew exactly what was happening.', name: 'Divya & Arjun', location: 'Hyderabad', initials: 'DA', saving: '25-year production promise' }
  ];
  nextTestimonial(): void { this.activeTestimonial.update(index => (index + 1) % this.testimonials.length); }
  previousTestimonial(): void { this.activeTestimonial.update(index => (index - 1 + this.testimonials.length) % this.testimonials.length); }
  closeMenu(): void { this.menuOpen.set(false); }
  openEstimate(): void { this.estimateOpen.set(true); this.closeMenu(); }
}
