import PageStart from "./page_start";
import MechanicsModeling from "./MechanicsModeling/MechanicsModeling";
import AppliedPhysics from "./AppliedPhysics/AppliedPhysics";
import WorldEconomy from "./WorldEconomy/WorldEconomy";
import './styles/specialties.module.scss';

export default function SpecialtiesContent() {
    return (
        <div className="main__container">
            <PageStart/>
            <hr className="w-full border-accent my-4 max-md:my-2"/>
            <MechanicsModeling/>
            <hr className="w-full border-accent my-4 max-md:my-2"/>
            <AppliedPhysics/>
            <hr className="w-full border-accent my-4 max-md:my-2"/>
            <WorldEconomy/>
        </div>
    );
}