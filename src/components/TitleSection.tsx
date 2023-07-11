import { DescriptionSection } from './DescriptionSection';
import './TitleSection.css';

export function TitleSection() {

    return (
        <section className="title-section">
            <div className='title-description-box'>
            <div className="title-container">
                <span className="title-first-line">deep dive</span>
                <span className="title-sec-line">into the peak.</span>
            </div>
            <DescriptionSection />
            </div>
        </section>
    )
}